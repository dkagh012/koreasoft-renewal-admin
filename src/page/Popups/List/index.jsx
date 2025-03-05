import styles from './index.module.scss';
import List from '@components/List';
import { certificationList } from '@mocks/Popup/mockData'; // 🔹 Mock 데이터 불러오기
import { Link } from 'react-router-dom';

const Index = () => {
    const columns = [
        { label: 'No', key: 'No', width: '5%' },
        { label: '제목', key: '제목', width: '55%' },
        { label: '게시일', key: '게시일', width: '20%' },
        { label: '공개 여부', key: '공개 여부', width: '20%' },
    ];

    const data = certificationList.map((item, index) => ({
        No: index + 1,
        제목: <Link to={`/popups/${index + 1}`}>{item.제목}</Link>,
        게시일: item.게시일,
        '공개 여부': item['공개 여부'],
    }));

    return (
        <div className={styles.pageContainer}>
            <List
                listLink={{ path: '/popups', text: '팝업 관리' }}
                title="팝업"
                listAction={{ path: '/popups/create', text: '팝업 생성' }}
                columns={columns}
                data={data}
                itemsPerPage={10} // 한 페이지당 10개씩 표시
            />
        </div>
    );
};

export default Index;
