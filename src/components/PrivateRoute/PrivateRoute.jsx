import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ Component }) => {
    const isAuthenticated = localStorage.getItem('token'); // 로그인 확인

    return isAuthenticated ? <Component /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
