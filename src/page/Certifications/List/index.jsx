import styles from './index.module.scss';
import List from '@components/List';
import { certificationList } from '@mocks/Certifications/mockData'; // 🔹 Mock 데이터 불러오기
import { Link } from 'react-router-dom';

const Index = () => {
    const columns = [
        { label: 'No', key: 'No', width: '5%' },
        { label: '구분', key: '구분', width: '20%' },
        { label: '제목', key: '제목', width: '35%' },
        { label: '등록일', key: '등록일', width: '20%' },
        { label: '순서', key: '순서', width: '10%' },
        { label: '공개 여부', key: '공개 여부', width: '10%' },
    ];

    const data = certificationList.map((item, index) => ({
        No: index + 1,
        구분: item.구분,
        제목: <Link to={`/certifications/${index + 1}`}>{item.제목}</Link>,
        등록일: item.등록일,
        순서: item.순서,
        '공개 여부': item['공개 여부'],
    }));

    return (
        <div className={styles.pageContainer}>
            <List
                listLink={{ path: '/certifications', text: '인증 관리' }}
                title="인증"
                listAction={{ path: '/certifications/create', text: '인증 생성' }}
                columns={columns}
                data={data}
                select={true} // ✅ select 사용 여부
                options={['지적재산권', '인증', 'MOU 및 가족회사', '표창장 및 위촉']} // ✅ 옵션 배열
                itemsPerPage={10} // 한 페이지당 10개씩 표시
            />
        </div>
    );
};

export default Index;
