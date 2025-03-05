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
    const [title, setTitle] = useState('');
    const [redirectUrl, setRedirectUrl] = useState('');
    const [postDate, setPostDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [isPostCalendarOpen, setIsPostCalendarOpen] = useState(false); // 게시일 캘린더 상태
    const [isEndCalendarOpen, setIsEndCalendarOpen] = useState(false); // 종료일 캘린더 상태
    const [visibility, setVisibility] = useState('공개'); // 공개 여부 상태

    const postInputRef = useRef(null);
    const endInputRef = useRef(null);
    const postCalendarRef = useRef(null);
    const endCalendarRef = useRef(null);

    // ✅ 캘린더 외부 클릭 시 닫기 (게시일)
    useEffect(() => {
        const handleClickOutside = e => {
            if (
                postCalendarRef.current &&
                !postCalendarRef.current.contains(e.target) &&
                postInputRef.current !== e.target
            ) {
                setIsPostCalendarOpen(false);
            }
        };

        if (isPostCalendarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isPostCalendarOpen]);

    // ✅ 캘린더 외부 클릭 시 닫기 (종료일)
    useEffect(() => {
        const handleClickOutside = e => {
            if (
                endCalendarRef.current &&
                !endCalendarRef.current.contains(e.target) &&
                endInputRef.current !== e.target
            ) {
                setIsEndCalendarOpen(false);
            }
        };

        if (isEndCalendarOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isEndCalendarOpen]);

    // ✅ 게시일 변경 핸들러
    const handlePostDateChange = date => {
        setPostDate(date);
        setIsPostCalendarOpen(false);
        postInputRef.current.value = date.toISOString().split('T')[0];
    };

    // ✅ 종료일 변경 핸들러
    const handleEndDateChange = date => {
        setEndDate(date);
        setIsEndCalendarOpen(false);
        endInputRef.current.value = date.toISOString().split('T')[0];
    };

    // ✅ 라디오 버튼 변경 핸들러
    const handleVisibilityChange = e => {
        setVisibility(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // 🔹 에디터의 내용을 가져오기
        const content = editorRef.current?.getInstance().getMarkdown();

        console.log('저장할 데이터:', { title, redirectUrl, content, postDate, endDate, visibility });
        alert('게시글이 저장되었습니다.');
    };

    return (
        <div className={styles.pageContainer}>
            <form onSubmit={handleSubmit}>
                <HeaderSection
                    title="팝업 등록"
                    breadcrumb={{ path: '/popups', text: '팝업' }}
                    cancelLink="/popups"
                    submitText="저장"
                    text="취소"
                    onSubmit={handleSubmit}
                />

                <div className={styles.inputContainer}>
                    <ul>
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

                        {/* 리다이렉트 URL 입력 */}
                        <li>
                            <label htmlFor="url">리다이렉트 URL</label>
                            <div className={styles.inputBox}>
                                <input
                                    type="text"
                                    id="url"
                                    value={redirectUrl}
                                    placeholder="리다이렉트 URL을 입력해주세요."
                                    onChange={e => setRedirectUrl(e.target.value)}
                                />
                            </div>
                        </li>

                        {/* 이미지 업로드 */}
                        <li>
                            <label htmlFor="file">이미지</label>
                            <div className={styles.inputBox}>
                                <input type="file" id="file" accept=".jpg, .jpeg, .png" />
                            </div>
                        </li>

                        {/* 게시일 선택 */}
                        <li>
                            <label>게시일</label>
                            <div className={styles.inputBox}>
                                <input
                                    type="text"
                                    ref={postInputRef}
                                    defaultValue={postDate.toISOString().split('T')[0]}
                                    readOnly
                                    onClick={() => setIsPostCalendarOpen(true)}
                                />
                                {isPostCalendarOpen && (
                                    <div className={styles.calendarWrapper} ref={postCalendarRef}>
                                        <Calendar onChange={handlePostDateChange} value={postDate} />
                                    </div>
                                )}
                                <CiCalendar />
                            </div>
                        </li>

                        {/* 종료일 선택 */}
                        <li>
                            <label>종료일</label>
                            <div className={styles.inputBox}>
                                <input
                                    type="text"
                                    ref={endInputRef}
                                    defaultValue={endDate.toISOString().split('T')[0]}
                                    readOnly
                                    onClick={() => setIsEndCalendarOpen(true)}
                                />
                                {isEndCalendarOpen && (
                                    <div className={styles.calendarWrapper} ref={endCalendarRef}>
                                        <Calendar onChange={handleEndDateChange} value={endDate} />
                                    </div>
                                )}
                                <CiCalendar />
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

                        {/* 에디터 */}
                        <li>
                            <label htmlFor="content">내용</label>
                            <div className={styles.editorWrapper}>
                                <Editor
                                    ref={editorRef}
                                    initialValue=""
                                    previewStyle="vertical"
                                    height="500px"
                                    initialEditType="wysiwyg"
                                    useCommandShortcut={true}
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
