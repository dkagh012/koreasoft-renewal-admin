import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { CiSearch } from 'react-icons/ci';

const List = ({
    listLink,
    title,
    listAction,
    columns,
    data,
    select, // ✅ select 사용 여부
    options = [], // ✅ select 옵션 배열
    itemsPerPage = 10,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState(options.length > 0 ? options[0] : ''); // ✅ 선택된 옵션 상태

    // 🔹 현재 URL 가져오기
    const location = useLocation();

    // 🔹 검색 기능을 활성화할 URL 목록
    const searchableRoutes = [
        '/board/all',
        '/board/news',
        '/board/activities',
        '/board/industry-news',
        '/board/announcements',
        '/partners',
        '/certifications',
        '/popups',
        '/files',
    ];

    // 🔹 현재 경로가 검색 가능한 URL인지 확인
    const isSearchEnabled = searchableRoutes.includes(location.pathname);

    // 🔹 검색어에 따라 데이터 필터링
    const filteredData = data.filter(item =>
        columns.some(col => item[col.key] && item[col.key].toString().toLowerCase().includes(searchTerm.toLowerCase())),
    );

    // 🔹 전체 페이지 수 계산 (검색 필터 적용 후)
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // 🔹 현재 페이지의 데이터만 보여주기
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = filteredData.slice(startIndex, endIndex);

    // 🔹 데이터가 변경될 때 페이지 리셋
    useEffect(() => {
        setCurrentPage(1);
    }, [data, searchTerm]);

    // 🔹 이전 페이지 이동
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // 🔹 다음 페이지 이동
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // 🔹 특정 페이지 클릭 이동
    const goToPage = page => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.listWrap}>
            {/* 🔹 상단 제목 & 링크 */}
            <div className={styles.listTitleBox}>
                <div className={styles.listLink}>
                    <Link to={listLink.path}>{listLink.text}</Link>
                    <h3>{title}</h3>
                </div>
                <div className={styles.titleBox}>
                    <div className={styles.title}>
                        <h2>{title}</h2>
                    </div>
                    <div className={styles.listAction}>
                        {/* ✅ 검색 옆에 select 추가 */}
                        {select && (
                            <select
                                value={selectedOption}
                                onChange={e => setSelectedOption(e.target.value)}
                                className={styles.selectBox}
                            >
                                {options.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        )}
                        {/* ✅ 검색 기능 */}
                        {isSearchEnabled && (
                            <div className={styles.searchBox}>
                                <input
                                    type="text"
                                    placeholder="검색어를 입력하세요"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                />
                                <button type="button">
                                    <CiSearch />
                                </button>
                            </div>
                        )}

                        {/* 리스트 추가 액션 버튼 */}
                        {listAction && <Link to={listAction.path}>{listAction.text}</Link>}
                    </div>
                </div>
            </div>

            {/* 🔹 리스트 테이블 */}
            <div className={styles.listBox}>
                <table className={styles.list}>
                    <thead className={styles.list_head}>
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index} style={{ width: col.width || 'auto' }}>
                                    {col.label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className={styles.list_body}>
                        {currentData.length > 0 ? (
                            currentData.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {columns.map((col, colIndex) => (
                                        <td
                                            key={colIndex}
                                            style={{ width: col.width || 'auto', textAlign: col.position || 'center' }}
                                        >
                                            {row[col.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className={styles.noData}>
                                    데이터가 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* 🔹 페이지네이션 */}
                {totalPages >= 1 && (
                    <div className={styles.pagination}>
                        <button onClick={prevPage} disabled={currentPage === 1}>
                            <IoIosArrowBack />
                        </button>

                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => goToPage(index + 1)}
                                className={currentPage === index + 1 ? styles.active : ''}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button onClick={nextPage} disabled={currentPage === totalPages}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

List.propTypes = {
    listLink: PropTypes.shape({
        path: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    listAction: PropTypes.shape({
        path: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            key: PropTypes.string.isRequired,
            width: PropTypes.string,
            position: PropTypes.string,
        }),
    ).isRequired,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    select: PropTypes.bool, // ✅ select 사용 여부
    options: PropTypes.arrayOf(PropTypes.string), // ✅ select 옵션 리스트
    itemsPerPage: PropTypes.number, // 한 페이지당 보여줄 항목 수 (기본값: 10)
};

export default List;
