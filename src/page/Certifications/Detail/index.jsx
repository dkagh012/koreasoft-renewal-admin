import { useParams } from 'react-router-dom';
import styles from './index.module.scss';
import HeaderSection from '@components/HeaderSection';
const Index = () => {
    const { id } = useParams();
    return (
        <div className={styles.pageContainer}>
            <HeaderSection
                title="게시글 상세보기"
                breadcrumb={{ path: '/board/all', text: '게시판' }}
                cancelLink="/board/all"
                text="목록"
                editText="수정"
                editLink={`/board/${id}/edit`}
                deleteText="수정"
                deleteLink={`/board/${id}/delete`}
            />
            <div className={styles.detailContainer}>
                <ul>
                    <li>
                        <label>작성일</label>
                        <div>
                            <p>2024-11-24</p>
                        </div>
                    </li>
                    <li>
                        <label>카테고리</label>
                        <div>
                            <p>지적재산권</p>
                        </div>
                    </li>
                    <li>
                        <label>썸네일</label>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </li>
                    <li>
                        <label>공개 여부</label>
                        <div>
                            <p>공개</p>
                        </div>
                    </li>
                    <li>
                        <label>제목(한국어)</label>
                        <div>
                            <p>제목</p>
                        </div>
                    </li>
                    <li>
                        <label>내용(한국어)</label>
                        <div>
                            <p>제10-59039058호</p>
                        </div>
                    </li>
                    <li>
                        <label>제목(영어)</label>
                        <div>
                            <p>제목</p>
                        </div>
                    </li>
                    <li>
                        <label>내용(영어)</label>
                        <div>
                            <p>제10-59039058호</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Index;
