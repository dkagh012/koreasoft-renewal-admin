import styles from './index.module.scss';
import List from '@components/List';
import { partnerList } from '@mocks/partner/mockData'; // 🔹 Mock 데이터 불러오기
import { Link } from 'react-router-dom';

const Index = () => {
    const columns = [
        { label: 'No', key: 'No', width: '5%' },
        { label: '구분', key: '구분', width: '10%' },
        { label: '파트너사 로고', key: '파트너사 로고', width: '35%' },
        { label: '파트너사 명', key: '파트너사 명', width: '30%' },
        { label: '순서', key: '순서', width: '10%' },
        { label: '공개 여부', key: '공개 여부', width: '10%' },
    ];

    const data = partnerList.map((item, index) => ({
        No: index + 1,
        구분: item.구분,
        '파트너사 로고': (
            <Link
                to={`/partners/${index + 1}`}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {item['파트너사 로고'] ? item['파트너사 로고'] : <span>이미지 없음</span>}
            </Link>
        ),
        '파트너사 명': item['파트너사 명'],
        순서: item.순서,
        '공개 여부': item['공개 여부'],
    }));

    return (
        <div className={styles.pageContainer}>
            <List
                listLink={{ path: '/partners', text: '파트너사 관리' }}
                title="파트너사"
                listAction={{ path: '/partners/create', text: '파트너사 생성' }}
                columns={columns}
                data={data}
                select={true} // ✅ select 사용 여부
                options={['전체', '공공기관', '일반기업', '학교/연구소']} // ✅ 옵션 배열
                itemsPerPage={10} // 한 페이지당 10개씩 표시
            />
        </div>
    );
};

export default Index;
