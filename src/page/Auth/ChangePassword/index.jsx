import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import axios from 'axios';
import { useState } from 'react';
import InputBox from '@components/ChangeInput';
import HeaderSection from '@components/HeaderSection';
export default function ChangePasswordPage() {
    const navigate = useNavigate();
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');

    // 🔹 비밀번호 유효성 검사 함수 (8자 이상 & 특수 문자 포함)
    const isPasswordValid = password => {
        return password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
    };

    // 🔹 비밀번호 변경 요청 처리
    const handlePasswordChange = async () => {
        try {
            const response = await axios.post('/api/change-password', {
                currentPassword,
                newPassword,
            });
            if (response.status === 200) {
                alert('비밀번호가 변경되었습니다.');
                navigate('/');
            }
        } catch (error) {
            alert('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
            console.error('비밀번호 변경 오류:', error);
        }
    };

    // 🔹 폼 제출 핸들러
    const handleSubmit = e => {
        e.preventDefault();
        setError('');

        if (!isPasswordValid(newPassword)) {
            setError('비밀번호는 최소 8자 이상이며, 특수 문자를 포함해야 합니다.');
            return;
        }

        if (newPassword !== confirmNewPassword) {
            setError('새 비밀번호가 일치하지 않습니다.');
            return;
        }

        handlePasswordChange();
    };

    return (
        <div className={styles.pageContainer}>
            <form onSubmit={handleSubmit}>
                <HeaderSection
                    title="비밀번호 변경"
                    breadcrumb={{ path: '/', text: '홈' }}
                    cancelLink="/"
                    submitText="저장"
                    onSubmit={handleSubmit}
                />

                <div className={styles.inputBox}>
                    <ul>
                        <li>
                            <InputBox
                                id="currentPassword"
                                label="현재 비밀번호"
                                placeholder="현재 비밀번호를 입력해주세요."
                                value={currentPassword}
                                onChange={e => setCurrentPassword(e.target.value)}
                            />
                        </li>
                        <li>
                            <InputBox
                                id="newPassword"
                                label="새 비밀번호"
                                placeholder="새 비밀번호를 입력해주세요."
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                            />
                        </li>
                        <li>
                            <InputBox
                                id="confirmNewPassword"
                                label="새 비밀번호 확인"
                                placeholder="새 비밀번호를 다시 입력해주세요."
                                value={confirmNewPassword}
                                onChange={e => setConfirmNewPassword(e.target.value)}
                            />
                        </li>
                    </ul>
                </div>

                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
}
