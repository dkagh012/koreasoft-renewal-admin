import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import Logo from '@images/Logo.png';
import user from '@images/icon/user.png';
import { TbLogout2 } from 'react-icons/tb';
import { IoIosArrowDown } from 'react-icons/io';
import { CiSettings } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa6';
import PropTypes from 'prop-types';

function Header({ toggleSideMenu, isSideMenuOpen }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const OpenDropDown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const LogOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    useEffect(() => {
        const handleClickOutside = event => {
            if (!event.target.closest(`.${styles.profile}`)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    return (
        <div className={`${styles.headerContainer} ${isSideMenuOpen ? styles.openSideMenu : ''}`}>
            <div className={styles.leftItem}>
                <div className={styles.headerLogo}>
                    <Link to="/">
                        <img src={Logo} alt="" />
                        <span>KoreaSoft</span>
                    </Link>
                </div>
                <div className={styles.sideMenuBar}>
                    <button type="button" onClick={toggleSideMenu}>
                        <FaBars />
                    </button>
                </div>
            </div>

            <div className={`${styles.profile} ${isDropdownOpen ? styles.clicked : ''}`}>
                <div className={styles.profile_box}>
                    <button type="button" onClick={OpenDropDown}>
                        <img src={user} alt="관리자 아이콘" /> 유저 닉네임
                        <IoIosArrowDown />
                    </button>
                </div>

                {isDropdownOpen && (
                    <div className={styles.dropdown}>
                        <div className={styles.pw_change}>
                            <Link to="/change-password">
                                <CiSettings />
                                비밀번호 변경
                            </Link>
                        </div>
                        <div className={styles.logout}>
                            <button type="button" onClick={LogOut}>
                                <TbLogout2 /> 로그아웃
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

Header.propTypes = {
    toggleSideMenu: PropTypes.func.isRequired,
    isSideMenuOpen: PropTypes.bool.isRequired,
};

export default Header;
