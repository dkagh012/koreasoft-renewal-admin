import styles from './index.module.scss';
import HeaderSection from '@components/HeaderSection';
import { useRef, useState } from 'react';

const PartnerForm = () => {
    const editorRef = useRef(); // 🔹 등록 Ref
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null);
    const [visibility, setVisibility] = useState('공개');
    const [order, setOrder] = useState('');

    // 🔹 입력값 변경 핸들러
    const handleChange = setter => event => setter(event.target.value);

    // 🔹 파일 선택 핸들러
    const handleFileChange = event => setFile(event.target.files[0]);

    // 🔹 폼 제출 핸들러
    const handleSubmit = event => {
        event.preventDefault();

        // 🔹 에디터의 내용을 가져오기 (에디터 적용할 경우)
        const content = editorRef.current?.getInstance().getMarkdown() || '';

        const formData = {
            category,
            title,
            file,
            visibility,
            order,
            content,
        };

        console.log('저장할 데이터:', formData);
        alert('게시글이 저장되었습니다.');
    };

    return (
        <div className={styles.pageContainer}>
            <form onSubmit={handleSubmit}>
                <HeaderSection
                    title="파트너사 등록"
                    breadcrumb={{ path: '/board/all', text: '게시판' }}
                    cancelLink="/board/all"
                    submitText="저장"
                    text="취소"
                    onSubmit={handleSubmit}
                />
                <div className={styles.inputContainer}>
                    <ul>
                        {/* 카테고리 선택 */}
                        <li>
                            <label htmlFor="category">카테고리</label>
                            <div className={styles.selectBox}>
                                <select id="category" value={category} onChange={handleChange(setCategory)}>
                                    <option value="">선택하세요</option>
                                    <option value="공공기관">공공기관</option>
                                    <option value="일반기업">일반기업</option>
                                    <option value="학교/연구소">학교/연구소</option>
                                </select>
                            </div>
                        </li>

                        {/* 파트너사 명 입력 */}
                        <li>
                            <label htmlFor="title">파트너사 명</label>
                            <div className={styles.inputBox}>
                                <input type="text" id="title" value={title} onChange={handleChange(setTitle)} />
                            </div>
                        </li>

                        {/* 파트너사 로고 파일 업로드 */}
                        <li>
                            <label htmlFor="file">파트너사 로고</label>
                            <div className={styles.inputBox}>
                                <input type="file" id="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
                            </div>
                        </li>

                        {/* 공개 여부 */}
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
                                        onChange={handleChange(setVisibility)}
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
                                        onChange={handleChange(setVisibility)}
                                    />
                                    <label htmlFor="private">비공개</label>
                                </div>
                            </div>
                        </li>

                        {/* 순서 입력 */}
                        <li>
                            <label htmlFor="order">순서</label>
                            <div className={styles.inputBox}>
                                <input type="text" id="order" value={order} onChange={handleChange(setOrder)} />
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default PartnerForm;
