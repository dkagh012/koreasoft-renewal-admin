import { AnimatePresence } from 'framer-motion';
import { useLocation, Route, Routes } from 'react-router-dom';

import Header from '@layout/Header';
import { ROUTE_PATH } from '../constants/routePath.jsx';

const AppRoute = () => {
    const location = useLocation();
    const pageKey = location.pathname.split('/')[1];

    return (
        <>
            <div className="container">
                <Header />
                <div className="wrap">
                    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
                        <Routes location={location} key={`path_${pageKey}`}>
                            {ROUTE_PATH.map(({ path, Component }) => {
                                return (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={<Component />} // Component를 JSX로 표시
                                    />
                                );
                            })}
                        </Routes>
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
};

export default AppRoute;
