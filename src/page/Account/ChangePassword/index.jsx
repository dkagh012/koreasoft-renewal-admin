import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import InputBox from '@components/ChangeInput';

export default function AccountPasswordChange() {
    const navigate = useNavigate();

    // 🔹 DB에서 불러온 아이디 값 (변경 불가)
    const [currentId, setCurrentId] = useState();
    // 🔹 비밀번호 입력값 상태
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');

    // 🔹 아이디 가져오기 (DB에서 불러오기)
    useEffect(() => {
        // 예제: API에서 사용자 정보 가져오기
        axios
            .get('/api/user')
            .then(response => {
                setCurrentId(response.data.id); // 아이디 설정
            })
            .catch(error => {
                console.error('사용자 정보를 불러오는 데 실패했습니다:', error);
            });
    }, []);

    // 🔹 비밀번호 유효성 검사 함수 (8자 이상 & 특수 문자 포함)
    const isPasswordValid = password => {
        return password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
    };

    // 🔹 입력값 변경 핸들러
    const handleChange = e => {
        const { id, value } = e.target;
        if (id === 'newPassword') setNewPassword(value);
        if (id === 'confirmNewPassword') setConfirmNewPassword(value);
    };

    // 🔹 폼 제출 핸들러
    const handleSubmit = async e => {
        e.preventDefault();
        setError('');

        // 비밀번호 유효성 검사
        if (!isPasswordValid(newPassword)) {
            setError('비밀번호는 최소 8자 이상이며, 특수 문자를 포함해야 합니다.');
            return;
        }

        // 비밀번호 일치 여부 확인
        if (newPassword !== confirmNewPassword) {
            setError('새 비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await axios.post('/api/change-password', {
                id: currentId,
                password: newPassword,
            });

            if (response.status === 200) {
                alert('비밀번호가 변경되었습니다.');
                navigate('/account/manage'); // 변경 후 계정 관리 페이지로 이동
            }
        } catch (error) {
            setError('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
            console.error('비밀번호 변경 오류:', error);
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
                            <h3>비밀번호 변경</h3>
                        </div>
                        <div className={styles.titleBox}>
                            <div className={styles.title}>
                                <h2>비밀번호 변경</h2>
                            </div>
                            <div className={styles.action}>
                                <Link to="/account/manage">취소</Link>
                                <button type="submit" disabled={!isPasswordValid(newPassword)}>
                                    저장
                                </button>
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
                                placeholder="아이디를 불러오는 중..."
                                disabled={true}
                                value={currentId}
                            />
                        </li>
                        <li>
                            <InputBox
                                id="newPassword"
                                label="새 비밀번호"
                                placeholder="새 비밀번호를 입력해주세요."
                                type="password"
                                value={newPassword}
                                onChange={handleChange}
                            />
                        </li>
                        <li>
                            <InputBox
                                id="confirmNewPassword"
                                label="새 비밀번호 확인"
                                placeholder="새 비밀번호를 다시 입력해주세요."
                                type="password"
                                value={confirmNewPassword}
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
