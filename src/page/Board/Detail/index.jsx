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
                        <label>제목</label>
                        <div>
                            <p>AI·IoT의 융합과 진화 AIoT 국제전시회 성황리에 막 올려</p>
                        </div>
                    </li>
                    <li>
                        <label>썸네일</label>
                        <div>
                            <img src="" alt="" />
                        </div>
                    </li>
                    <li>
                        <label>리다이렉트 URL</label>
                        <div>
                            <p>https://www.koreasoft.kr/</p>
                        </div>
                    </li>
                    <li>
                        <label>공개 여부</label>
                        <div>
                            <p>공개</p>
                        </div>
                    </li>
                    <li>
                        <label>작성일</label>
                        <div>
                            <p>2024-11-10</p>
                        </div>
                    </li>
                    <li>
                        <label>게시일</label>
                        <div>
                            <p>2024-11-11</p>
                        </div>
                    </li>
                    <li>
                        <label>내용</label>
                        <div className={styles.detailText}></div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Index;
