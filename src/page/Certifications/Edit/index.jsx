import { useState } from 'react';
import styles from './index.module.scss';
import HeaderSection from '@components/HeaderSection';

const Index = () => {
    const [category, setCategory] = useState('');
    const [visibility, setVisibility] = useState('공개');
    const [order, setOrder] = useState('');
    const [file, setFile] = useState(null);
    const [titleKor, setTitleKor] = useState('');
    const [contentKor, setContentKor] = useState('');
    const [titleEng, setTitleEng] = useState('');
    const [contentEng, setContentEng] = useState('');

    // 🔹 공개 여부 변경 핸들러
    const handleVisibilityChange = e => {
        setVisibility(e.target.value);
    };

    // 🔹 파일 선택 핸들러
    const handleFileChange = e => {
        setFile(e.target.files[0]);
    };

    // 🔹 폼 제출 핸들러
    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            category,
            file,
            visibility,
            order,
            titleKor,
            contentKor,
            titleEng,
            contentEng,
        };

        console.log('저장할 데이터:', formData);
        alert('인증이 저장되었습니다.');
    };

    return (
        <div className={styles.pageContainer}>
            <form onSubmit={handleSubmit}>
                <HeaderSection
                    title="인증 작성"
                    breadcrumb={{ path: '/certifications', text: '인증 관리' }}
                    cancelLink="/certifications"
                    submitText="저장"
                    text="취소"
                    onSubmit={handleSubmit}
                />

                <div className={styles.inputContainer}>
                    <ul>
                        {/* 🔹 카테고리 선택 */}
                        <li>
                            <label htmlFor="category">카테고리</label>
                            <div className={styles.selectBox}>
                                <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
                                    <option value="">선택하세요</option>
                                    <option value="뉴스">뉴스</option>
                                    <option value="주요활동">주요활동</option>
                                    <option value="업계소식">업계소식</option>
                                    <option value="공지사항">공지사항</option>
                                </select>
                            </div>
                        </li>

                        {/* 🔹 파일 입력 */}
                        <li>
                            <label htmlFor="file">파일</label>
                            <div className={styles.inputBox}>
                                <input type="file" id="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
                            </div>
                        </li>

                        {/* 🔹 공개 여부 선택 (라디오 버튼) */}
                        <li>
                            <label>공개 여부</label>
                            <div className={styles.radioBox}>
                                <div>
                                    <input
                                        type="radio"
                                        id="public"
                                        name="visibility"
                                        value="공개"
                                        checked={visibility === '공개'}
                                        onChange={handleVisibilityChange}
                                    />
                                    <label htmlFor="public">공개</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="private"
                                        name="visibility"
                                        value="비공개"
                                        checked={visibility === '비공개'}
                                        onChange={handleVisibilityChange}
                                    />
                                    <label htmlFor="private">비공개</label>
                                </div>
                            </div>
                        </li>

                        {/* 🔹 순서 입력 */}
                        <li>
                            <label htmlFor="order">순서</label>
                            <div className={styles.inputBox}>
                                <input
                                    type="number"
                                    id="order"
                                    value={order}
                                    placeholder="순서를 입력하세요"
                                    onChange={e => setOrder(e.target.value)}
                                />
                            </div>
                        </li>

                        {/* 🔹 제목(한국어) 입력 */}
                        <li>
                            <label htmlFor="titleKor">제목(한국어)</label>
                            <div className={styles.inputBox}>
                                <input
                                    type="text"
                                    id="titleKor"
                                    value={titleKor}
                                    placeholder="제목(한국어)를 입력하세요"
                                    onChange={e => setTitleKor(e.target.value)}
                                />
                            </div>
                        </li>

                        {/* 🔹 내용(한국어) 입력 */}
                        <li>
                            <label htmlFor="contentKor">내용(한국어)</label>
                            <div className={styles.inputBox}>
                                <input
                                    id="contentKor"
                                    value={contentKor}
                                    placeholder="내용(한국어)를 입력하세요"
                                    onChange={e => setContentKor(e.target.value)}
                                />
                            </div>
                        </li>

                        {/* 🔹 제목(영어) 입력 */}
                        <li>
                            <label htmlFor="titleEng">제목(영어)</label>
                            <div className={styles.inputBox}>
                                <input
                                    type="text"
                                    id="titleEng"
                                    value={titleEng}
                                    placeholder="제목(영어)를 입력하세요"
                                    onChange={e => setTitleEng(e.target.value)}
                                />
                            </div>
                        </li>

                        {/* 🔹 내용(영어) 입력 */}
                        <li>
                            <label htmlFor="contentEng">내용(영어)</label>
                            <div className={styles.inputBox}>
                                <input
                                    id="contentEng"
                                    value={contentEng}
                                    placeholder="내용(영어)를 입력하세요"
                                    onChange={e => setContentEng(e.target.value)}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default Index;
