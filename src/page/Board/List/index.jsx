import { Link, useLocation } from 'react-router-dom';
import List from '@components/List';
import { boardList as allList } from '@mocks/Board/All/mockData'; // 뉴스
import { boardList as newsList } from '@mocks/Board/News/mockData'; // 뉴스
import { boardList as activitiesList } from '@mocks/Board/Activities/mockData'; // 주요활동
import { boardList as announcementsList } from '@mocks/Board/Announcements/mockData'; // 공지사항
import { boardList as industryList } from '@mocks/Board/Industry/mockData'; // 업계소식

const BoardList = () => {
    const location = useLocation();

    // 🔹 현재 URL에 따라 적절한 데이터를 불러오기
    let boardList = [];
    let boardTitle = '게시글 리스트';
    let isAllBoard = false;

    switch (location.pathname) {
        case '/board/all':
            boardList = allList;
            boardTitle = '전체';
            isAllBoard = true;
            break;
        case '/board/news':
            boardList = newsList;
            boardTitle = '뉴스';
            break;
        case '/board/activities':
            boardList = activitiesList;
            boardTitle = '주요 활동';
            break;
        case '/board/announcements':
            boardList = announcementsList;
            boardTitle = '공지사항';
            break;
        case '/board/industry-news':
            boardList = industryList;
            boardTitle = '업계 소식';
            break;
        default:
            boardList = [];
            boardTitle = '게시글 리스트';
    }

    const columns = [
        { label: 'No', key: 'No', width: '5%' },
        ...(isAllBoard ? [{ label: '카테고리', key: 'category', width: '10%' }] : []), // 전체 게시판일 경우 카테고리 추가
        { label: '제목', key: '제목', width: isAllBoard ? '45%' : '55%', position: 'left' },
        { label: '게시일', key: '게시일', width: '10%' },
        { label: '등록자', key: '등록자', width: '10%' },
        { label: '공개여부', key: '공개여부', width: '10%' },
    ];

    const data = boardList.map(item => ({
        No: item.No,
        ...(isAllBoard ? { category: item.카테고리 } : {}), // 전체 게시판일 경우 카테고리 포함
        제목: <Link to={`/board/${item.No}`}>{item.제목}</Link>,
        게시일: item.게시일,
        등록자: item.등록자,
        공개여부: item.공개여부,
    }));

    return (
        <List
            listLink={{ path: '/board', text: '게시판 관리' }}
            title={boardTitle}
            listAction={{ path: '/board/create', text: '게시글 작성' }}
            columns={columns}
            data={data}
            itemsPerPage={10}
            search={true}
        />
    );
};

export default BoardList;
