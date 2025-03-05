import { useRef, useState, useEffect } from 'react';
import styles from './index.module.scss';
import HeaderSection from '@components/HeaderSection';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@toast-ui/editor/dist/toastui-editor.css'; // Toast UI Editor 스타일
import { Editor } from '@toast-ui/react-editor';
import { CiCalendar } from 'react-icons/ci';
const PostForm = () => {
    const editorRef = useRef(); // 에디터 Ref
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [postDate, setPostDate] = useState(new Date());
    const [isCalendarOpen, setIsCalendarOpen] = useState(false); // 캘린더 열기/닫기 상태
    const [visibility, setVisibility] = useState('공개'); // 공개 여부 상태
    const inputRef = useRef(null);
    const calendarRef = useRef(null);

    // ✅ 캘린더 외부 클릭 시 닫기 (이벤트 리스너 추가)
    useEffect(() => {
        const handleClickOutside = e => {
            if (
                calendarRef.current &&
                !calendarRef.current.contains(e.target) && // 캘린더 외부 클릭 여부 확인
                inputRef.current !== e.target // input 클릭 시 예외 처리
            ) {
                setIsCalendarOpen(false);
            }
        };

        if (isCalendarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCalendarOpen]);

    // ✅ 날짜 변경 핸들러 (📌 input 값 업데이트 포함)
    const handleDateChange = date => {
        setPostDate(date);
        setIsCalendarOpen(false); // 날짜 선택 후 캘린더 닫기
        inputRef.current.value = date.toISOString().split('T')[0]; // 📌 input에 값 반영
    };

    // ✅ 라디오 버튼 변경 핸들러
    const handleVisibilityChange = e => {
        setVisibility(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // 🔹 에디터의 내용을 가져오기
        const content = editorRef.current?.getInstance().getMarkdown();

        console.log('저장할 데이터:', { category, title, content, postDate, visibility });
        alert('게시글이 저장되었습니다.');
    };

    return (
        <div className={styles.pageContainer}>
            <form onSubmit={handleSubmit}>
                <HeaderSection
                    title="게시글 작성"
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
                                <select id="category" value={category} onChange={e => setCategory(e.target.value)}>
                                    <option value="">선택하세요</option>
                                    <option value="뉴스">뉴스</option>
                                    <option value="주요활동">주요활동</option>
                                    <option value="업계소식">업계소식</option>
                                    <option value="공지사항">공지사항</option>
                                </select>
                            </div>
                        </li>

                        {/* 제목 입력 */}
                        <li>
                            <label htmlFor="title">제목</label>
                            <div className={styles.inputBox}>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    placeholder="제목을 입력해주세요."
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>
                        </li>

                        {/* 썸네일 입력 */}
                        <li>
                            <label htmlFor="file">썸네일</label>
                            <div className={styles.inputBox}>
                                <input type="file" id="file" accept=".jpg, .jpeg, .png" />
                            </div>
                        </li>

                        {/* 리다이렉트 URL 입력 */}
                        <li>
                            <label htmlFor="url">리다이렉트 URL</label>
                            <div className={styles.inputBox}>
                                <input type="text" id="url" />
                            </div>
                        </li>

                        {/* 공개 여부 (라디오 버튼) */}
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

                        {/* 게시일 선택 */}
                        <li>
                            <label>게시일</label>
                            <div className={styles.inputBox}>
                                {/* ✅ input 클릭 시 캘린더 열기 */}
                                <input
                                    type="text"
                                    ref={inputRef}
                                    defaultValue={postDate.toISOString().split('T')[0]} // YYYY-MM-DD 형식
                                    readOnly
                                    onClick={() => setIsCalendarOpen(true)}
                                />

                                {/* ✅ input 클릭 시만 캘린더 표시 (외부 클릭 감지 포함) */}
                                {isCalendarOpen && (
                                    <div className={styles.calendarWrapper} ref={calendarRef}>
                                        <Calendar onChange={handleDateChange} value={postDate} />
                                    </div>
                                )}

                                <CiCalendar />
                            </div>
                        </li>

                        {/* ✅ Toast UI Editor 적용 */}
                        <li>
                            <label htmlFor="content">내용</label>
                            <div className={styles.editorWrapper}>
                                <Editor
                                    ref={editorRef}
                                    initialValue=""
                                    previewStyle="vertical" // 미리보기 스타일 (tab / vertical)
                                    height="500px"
                                    initialEditType="wysiwyg" // markdown 또는 wysiwyg
                                    useCommandShortcut={true} // 단축키 사용 여부
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default PostForm;
