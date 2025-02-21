import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Side.module.scss';
import { FaUserFriends, FaUsers, FaUserCheck } from 'react-icons/fa';
import { MdVerified, MdOutlineWeb, MdOutlineImage } from 'react-icons/md';
import { AiOutlineFileText, AiOutlineUserSwitch } from 'react-icons/ai';
import { TiHomeOutline } from 'react-icons/ti';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

export default function Side({ isSideMenuOpen }) {
    const [isBoardMenuOpen, setIsBoardMenuOpen] = useState(false); // 서브메뉴 상태

    // 🔹 서브메뉴 토글 함수
    const toggleBoardMenu = () => {
        setIsBoardMenuOpen(prev => !prev);
    };

    return (
        <div className={`${styles.sideMenuContainer} ${isSideMenuOpen ? styles.openSideMenu : ''}`}>
            <div className={styles.sideMenuWrap}>
                <ul>
                    <li className={styles.item}>
                        <Link to="/">
                            <TiHomeOutline />
                            <span>홈</span>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/account/manage">
                            <FaUsers />
                            <span>계정관리</span>
                        </Link>
                    </li>
                    {isSideMenuOpen ? (
                        <li className={styles.item}>
                            <button type="button" onClick={toggleBoardMenu}>
                                <AiOutlineUserSwitch />
                                <span>게시판 관리</span>
                                <div className={styles.arrow}>
                                    {isBoardMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                            </button>
                            {isBoardMenuOpen && (
                                <ul className={styles.subMenu}>
                                    <li>
                                        <Link to="/board/all">전체</Link>
                                    </li>
                                    <li>
                                        <Link to="/board/news">뉴스</Link>
                                    </li>
                                    <li>
                                        <Link to="/board/activities">주요활동</Link>
                                    </li>
                                    <li>
                                        <Link to="/board/industry-news">업계소식</Link>
                                    </li>
                                    <li>
                                        <Link to="/board/announcements">공지사항</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    ) : (
                        <li className={styles.item}>
                            <Link to="/board/all">
                                <AiOutlineUserSwitch /> <span>게시판 관리</span>
                            </Link>
                        </li>
                    )}

                    <li className={styles.item}>
                        <Link to="/partners">
                            <FaUserFriends /> <span>파트너사 관리</span>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/certifications">
                            <MdVerified /> <span>인증 관리</span>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/popups">
                            <MdOutlineWeb />
                            <span> 팝업 관리 </span>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/banners">
                            <MdOutlineImage />
                            <span> 배너 관리</span>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/files">
                            <AiOutlineFileText /> <span>파일 관리</span>
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/visitors">
                            <FaUserCheck /> <span>접속자</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
