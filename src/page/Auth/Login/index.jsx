import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './index.module.scss';
// import Logo from '@images/logo-white.png';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('/auth/login', { id, password });

            if (response.data.token) {
                localStorage.setItem('token', response.data.token); // 토큰 저장
                navigate('/dashboard'); // 로그인 성공 시 대시보드로 이동
            } else {
                setError('로그인 실패. 다시 시도해주세요.');
            }
        } catch (err) {
            setError(`이메일 또는 비밀번호가 올바르지 않습니다. `);
            console.log(err.message);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.background}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>
            <div className={styles.loginWrap}>
                <form onSubmit={handleLogin}>
                    {/* <img src={Logo} alt="코리아소프트(주)" /> */}
                    <h3>로그인 화면</h3>
                    <label htmlFor="username">아이디</label>
                    <div className={styles.inputWrapper}>
                        <span></span>
                        <input
                            type="text"
                            id="username"
                            placeholder="아이디 입력"
                            value={id}
                            onChange={e => setId(e.target.value)}
                            required
                        />
                    </div>
                    <label htmlFor="password">비밀번호</label>
                    <div className={styles.inputWrapper}>
                        <span></span>
                        <input
                            type="password"
                            id="password"
                            placeholder="비밀번호 입력"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">로그인</button>
                </form>
                {error && <p className={styles.error}>{error}</p>}
            </div>
        </div>
    );
};

export default Login;
