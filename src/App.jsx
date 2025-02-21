import AppRoute from './Route/AppRoute';
import { BrowserRouter } from 'react-router-dom';
import '@assets/scss/app.scss';
function App() {
    return (
        <>
            <BrowserRouter>
                <AppRoute />
            </BrowserRouter>
        </>
    );
}

export default App;
