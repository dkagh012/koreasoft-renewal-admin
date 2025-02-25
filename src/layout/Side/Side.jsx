import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Side.module.scss';
import { FaUserFriends, FaUsers, FaUserCheck } from 'react-icons/fa';
import { MdVerified, MdOutlineWeb, MdOutlineImage } from 'react-icons/md';
import { AiOutlineFileText, AiOutlineUserSwitch } from 'react-icons/ai';
import { TiHomeOutline } from 'react-icons/ti';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import PropTypes from 'prop-types';

export default function Side({ isSideMenuOpen }) {
    const location = useLocation(); // 현재 URL 가져오기
    const [isBoardMenuOpen, setIsBoardMenuOpen] = useState(location.pathname.startsWith('/board')); // 게시판 관리 메뉴 자동 열기

    // 🔹 서브메뉴 토글 함수
    const toggleBoardMenu = () => {
        setIsBoardMenuOpen(prev => !prev);
    };
    useEffect(() => {
        if (!isSideMenuOpen) {
            setIsBoardMenuOpen(false);
        }
    }, [isSideMenuOpen]);

    return (
        <div className={`${styles.sideMenuContainer} ${isSideMenuOpen ? styles.openSideMenu : ''}`}>
            <div className={styles.sideMenuWrap}>
                <ul>
                    <li className={`${styles.item} ${location.pathname === '/' ? styles.clicked : ''}`}>
                        <Link to="/">
                            <TiHomeOutline />
                            <span>홈</span>
                        </Link>
                    </li>
                    <li className={`${styles.item} ${location.pathname.startsWith('/account') ? styles.clicked : ''}`}>
                        <Link to="/account/manage">
                            <FaUsers />
                            <span>계정관리</span>
                        </Link>
                    </li>
                    {isSideMenuOpen ? (
                        <li
                            className={`${styles.item} ${location.pathname.startsWith('/board') ? styles.clicked : ''}`}
                        >
                            {/* 🔹 게시판 관리 버튼 */}
                            <button type="button" onClick={toggleBoardMenu}>
                                <AiOutlineUserSwitch />
                                <span>게시판 관리</span>
                                <div className={styles.arrow}>
                                    {isBoardMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                            </button>

                            {/* 🔹 사이드 메뉴가 열려 있을 때만 서브메뉴 표시 */}
                            {isBoardMenuOpen && (
                                <ul className={styles.subMenu}>
                                    <li className={location.pathname === '/board/all' ? styles.clicked : ''}>
                                        <Link to="/board/all">전체</Link>
                                    </li>
                                    <li className={location.pathname === '/board/news' ? styles.clicked : ''}>
                                        <Link to="/board/news">뉴스</Link>
                                    </li>
                                    <li className={location.pathname === '/board/activities' ? styles.clicked : ''}>
                                        <Link to="/board/activities">주요활동</Link>
                                    </li>
                                    <li className={location.pathname === '/board/industry-news' ? styles.clicked : ''}>
                                        <Link to="/board/industry-news">업계소식</Link>
                                    </li>
                                    <li className={location.pathname === '/board/announcements' ? styles.clicked : ''}>
                                        <Link to="/board/announcements">공지사항</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    ) : (
                        // 🔹 사이드 메뉴가 닫혀 있을 때 "게시판 관리" 링크만 표시
                        <li
                            className={`${styles.item} ${location.pathname.startsWith('/board') ? styles.clicked : ''}`}
                        >
                            <Link to="/board/all">
                                <AiOutlineUserSwitch />
                                <span>게시판 관리</span>
                            </Link>
                        </li>
                    )}

                    <li className={`${styles.item} ${location.pathname.startsWith('/partners') ? styles.clicked : ''}`}>
                        <Link to="/partners">
                            <FaUserFriends /> <span>파트너사 관리</span>
                        </Link>
                    </li>
                    <li
                        className={`${styles.item} ${
                            location.pathname.startsWith('/certifications') ? styles.clicked : ''
                        }`}
                    >
                        <Link to="/certifications">
                            <MdVerified /> <span>인증 관리</span>
                        </Link>
                    </li>
                    <li className={`${styles.item} ${location.pathname.startsWith('/popups') ? styles.clicked : ''}`}>
                        <Link to="/popups">
                            <MdOutlineWeb />
                            <span> 팝업 관리 </span>
                        </Link>
                    </li>
                    <li className={`${styles.item} ${location.pathname.startsWith('/banners') ? styles.clicked : ''}`}>
                        <Link to="/banners">
                            <MdOutlineImage />
                            <span> 배너 관리</span>
                        </Link>
                    </li>
                    <li className={`${styles.item} ${location.pathname.startsWith('/files') ? styles.clicked : ''}`}>
                        <Link to="/files">
                            <AiOutlineFileText /> <span>파일 관리</span>
                        </Link>
                    </li>
                    <li className={`${styles.item} ${location.pathname.startsWith('/visitors') ? styles.clicked : ''}`}>
                        <Link to="/visitors">
                            <FaUserCheck /> <span>접속자</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

Side.propTypes = {
    isSideMenuOpen: PropTypes.bool.isRequired,
};
