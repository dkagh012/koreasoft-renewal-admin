import { Link } from 'react-router-dom';
import List from '@components/List';
import { accountList } from '@mocks/AccountList/mockData'; // 🔹 Mock 데이터 불러오기

const AccountList = () => {
    const columns = [
        { label: 'No', key: 'No', width: '5%' },
        { label: '아이디', key: '아이디', width: '40%', position: 'left' },
        { label: '이름', key: '이름', width: '20%' },
        { label: '권한', key: '권한', width: '15%' },
        { label: '비밀번호 변경', key: '비밀번호 변경', width: '10%' },
        { label: '삭제', key: '삭제', width: '10%' },
    ];

    // 🔹 Mock 데이터 변환 (테이블 형식에 맞게 가공)
    const data = accountList.map((user, index) => ({
        No: index + 1,
        아이디: user.아이디,
        이름: user.이름,
        권한: (
            <select defaultValue={user.권한}>
                <option value="최고 관리자">최고 관리자</option>
                <option value="관리자">관리자</option>
            </select>
        ),
        계정상태: user.계정상태,
        '비밀번호 변경': <Link to="/account/change-password">변경</Link>,
        삭제: <button type="button">삭제</button>,
    }));

    return (
        <List
            listLink={{ path: '/account/manage', text: '계정 관리' }}
            title="계정 리스트"
            listAction={{ path: '/account/create', text: '계정 생성' }}
            columns={columns}
            data={data}
            itemsPerPage={10} // 한 페이지당 5개씩 보여줌
        />
    );
};

export default AccountList;
