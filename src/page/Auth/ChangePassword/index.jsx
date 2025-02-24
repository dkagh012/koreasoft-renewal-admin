import styles from './index.module.scss';
import { Link } from 'react-router-dom';
const index = () => {
    return (
        <>
            <form action="">
                <div className={styles.top}>
                    {/* 🔹 상단 제목 & 링크 */}
                    <div className={styles.listTitleBox}>
                        <div className={styles.link}>
                            <Link to="/">홈</Link>
                            <h3>비밀번호 변경</h3>
                        </div>
                        <div className={styles.titleBox}>
                            <div className={styles.title}>
                                <h2>비밀번호 변경</h2>
                            </div>
                            <div className={styles.action}>
                                <Link to="/">취소</Link>
                                <button type="button">저장</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.inputBox}>
                    <ul>
                        <li>
                            <label htmlFor="currentPassword">현재 비밀번호</label>
                            <input type="password" id="currentPassword" placeholder="현재 비밀번호를 입력해주세요." />
                        </li>
                        <li>
                            <label htmlFor="newPassword">새 비밀번호</label>
                            <input type="password" id="newPassword" placeholder="새 비밀번호를 입력해주세요." />
                        </li>
                        <li>
                            <label htmlFor="confirmNewPassword">새 비밀번호 확인</label>
                            <input
                                type="password"
                                id="confirmNewPassword"
                                placeholder="새 비밀번호를 다시 입력해주세요."
                            />
                        </li>
                    </ul>
                </div>
            </form>
        </>
    );
};

export default index;
