import { useParams } from 'react-router-dom';
import styles from './index.module.scss';
import HeaderSection from '@components/HeaderSection';

const Index = () => {
    const { id } = useParams();
    return (
        <div className={styles.pageContainer}>
            <HeaderSection
                title="게시글 상세보기"
                breadcrumb={{ path: '/partners/all', text: '게시판' }}
                cancelLink="/partners/all"
                text="목록"
                editText="수정"
                editLink={`/partners/${id}/edit`}
                deleteText="수정"
                deleteLink={`/partners/${id}/delete`}
            />
            <div className={styles.detailContainer}>
                <ul>
                    <li>
                        <label>작성일</label>
                        <div>
                            <p>2024-11-05</p>
                        </div>
                    </li>
                    <li>
                        <label>카테고리</label>
                        <div>
                            <p>공공기관</p>
                        </div>
                    </li>
                    <li>
                        <label>파트너사 명</label>
                        <div>
                            <p>경남대학교</p>
                        </div>
                    </li>
                    <li>
                        <label>파트너사 로고</label>
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
                        <label>순서</label>
                        <div>
                            <p>1</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Index;
