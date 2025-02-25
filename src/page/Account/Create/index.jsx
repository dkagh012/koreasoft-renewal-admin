import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import axios from 'axios';
import { useState } from 'react';
import InputBox from '@components/ChangeInput';

export default function AccountCreate() {
    const navigate = useNavigate();

    // 🔹 입력 값 관리
    const [formData, setFormData] = useState({
        currentId: '',
        nickname: '',
        password: '',
    });

    const [error, setError] = useState('');

    // 🔹 비밀번호 유효성 검사 함수 (8자 이상 & 특수 문자 포함)
    const isPasswordValid = password => {
        return password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
    };

    // 🔹 입력값 변경 핸들러
    const handleChange = e => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value,
        }));
    };

    // 🔹 폼 제출 핸들러
    const handleSubmit = async e => {
        e.preventDefault();
        setError('');

        // 비밀번호 유효성 검사
        if (!isPasswordValid(formData.password)) {
            setError('비밀번호는 최소 8자 이상이며, 특수 문자를 포함해야 합니다.');
            return;
        }

        try {
            const response = await axios.post('/api/account/create', formData);
            if (response.status === 200) {
                alert('계정이 생성되었습니다.');
                navigate('/account/manage'); // 계정 관리 페이지로 이동
            }
        } catch (error) {
            setError('계정 생성에 실패했습니다. 다시 시도해주세요.');
            console.error('계정 생성 오류:', error);
        }
    };

    return (
        <div className={styles.pageContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.top}>
                    {/* 🔹 상단 제목 & 링크 */}
                    <div className={styles.listTitleBox}>
                        <div className={styles.link}>
                            <Link to="/account/manage">계정 관리</Link>
                            <h3>계정 생성</h3>
                        </div>
                        <div className={styles.titleBox}>
                            <div className={styles.title}>
                                <h2>계정 생성</h2>
                            </div>
                            <div className={styles.action}>
                                <Link to="/account/manage">취소</Link>
                                <button type="submit">저장</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 🔹 입력 필드 */}
                <div className={styles.inputBox}>
                    <ul>
                        <li>
                            <InputBox
                                id="currentId"
                                label="아이디"
                                placeholder="아이디를 입력해주세요"
                                value={formData.currentId}
                                onChange={handleChange}
                            />
                        </li>
                        <li>
                            <InputBox
                                id="nickname"
                                label="이름(닉네임)"
                                placeholder="이름(닉네임)을 입력해주세요"
                                value={formData.nickname}
                                onChange={handleChange}
                            />
                        </li>
                        <li>
                            <InputBox
                                id="password"
                                label="비밀번호"
                                placeholder="비밀번호를 입력해주세요."
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </li>
                    </ul>
                </div>
                {/* 🔹 에러 메시지 표시 */}
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
}
