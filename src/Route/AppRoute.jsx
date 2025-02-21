import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation, Route, Routes } from 'react-router-dom';
import SideMenu from '@layout/Side/Side.jsx';
import Header from '@layout/Header/Header.jsx';
import { ROUTE_PATH } from '../constants/routePath.jsx';

const AppRoute = () => {
    const location = useLocation();
    const pageKey = location.pathname.split('/')[1];
    const isLoginPage = location.pathname === '/login';

    // 🔹 사이드 메뉴 토글 상태
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    // 🔹 사이드 메뉴 토글 함수
    const toggleSideMenu = () => {
        setIsSideMenuOpen(prev => !prev);
    };

    return (
        <>
            <div className="container">
                {!isLoginPage && <Header toggleSideMenu={toggleSideMenu} isSideMenuOpen={isSideMenuOpen} />}
                {!isLoginPage && <SideMenu isSideMenuOpen={isSideMenuOpen} />}

                <div className={isSideMenuOpen ? 'wrap open' : 'wrap'}>
                    <div className="content">
                        <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                            <Routes location={location} key={`path_${pageKey}`}>
                                {ROUTE_PATH.map(({ path, Component }) => (
                                    <Route key={path} path={path} element={<Component />} />
                                ))}
                            </Routes>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AppRoute;
