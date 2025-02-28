import { useRef, useState } from 'react';
import styles from './index.module.scss';
import HeaderSection from '@components/HeaderSection';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@toast-ui/editor/dist/toastui-editor.css'; // Toast UI Editor 스타일
import { Editor } from '@toast-ui/react-editor';

const PostForm = () => {
    const editorRef = useRef(); // 에디터 Ref
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [postDate, setPostDate] = useState(new Date());

    const handleSubmit = e => {
        e.preventDefault();

        // 🔹 에디터의 내용을 가져오기
        const content = editorRef.current?.getInstance().getMarkdown();

        console.log('저장할 데이터:', { category, title, content, postDate });
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

                        {/* 게시일 선택 */}
                        <li>
                            <label>게시일</label>
                            <div className={styles.inputBox}>
                                <Calendar onChange={setPostDate} value={postDate} />
                            </div>
                        </li>

                        {/* ✅ Toast UI Editor 적용 */}
                        <li>
                            <label htmlFor="content">내용</label>
                            <div className={styles.editorWrapper}>
                                <Editor
                                    ref={editorRef}
                                    initialValue="여기에 내용을 입력하세요..."
                                    previewStyle="vertical" // 미리보기 스타일 (tab / vertical)
                                    height="400px"
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
