// Import Statements

// 페이지 접속 시 로그인 여부 판단 컴포넌트트
// import PrivateRoute from '@components/PrivateRoute/PrivateRoute';

// 인증 및 계정 관리
import LoginPage from '@page/Auth/Login';
import ChangePasswordPage from '@page/Auth/ChangePassword';
import MainPage from '@page/Dashboard/Main';
import AccountManagementPage from '@page/Account/Manage';
import AccountCreatePage from '@page/Account/Create';
import AccountChangePasswordPage from '@page/Account/ChangePassword';

// 게시판 관리
import BoardCreatePage from '@page/Board/Create';
import BoardListPage from '@page/Board/List';
import BoardDetailPage from '@page/Board/Detail';
import BoardEditPage from '@page/Board/Edit';

// 파트너사 관리
import PartnerListPage from '@page/Partners/List';
import PartnerCreatePage from '@page/Partners/Create';
import PartnerDetailPage from '@page/Partners/Detail';
import PartnerEditPage from '@page/Partners/Edit';

// 인증 관리
import CertificationListPage from '@page/Certifications/List';
import CertificationCreatePage from '@page/Certifications/Create';
import CertificationDetailPage from '@page/Certifications/Detail';
import CertificationEditPage from '@page/Certifications/Edit';

// 팝업 관리
import PopupListPage from '@page/Popups/List';
import PopupCreatePage from '@page/Popups/Create';
import PopupDetailPage from '@page/Popups/Detail';
import PopupEditPage from '@page/Popups/Edit';

// 배너 관리
import BannerManagementPage from '@page/Banners/Management';

// 파일 관리
import FileListPage from '@page/Files/List';
import FileCreatePage from '@page/Files/Create';
import FileDetailPage from '@page/Files/Detail';
import FileEditPage from '@page/Files/Edit';

// 접속자 관리
import VisitorManagementPage from '@page/Visitors/Management';

// Route Path Definition
export const ROUTE_PATH = [
    // { path: '/login', Component: LoginPage }, // 로그인
    // { path: '/', Component: () => <PrivateRoute Component={MainPage} /> }, // 메인페이지
    // { path: '/change-password', Component: () => <PrivateRoute Component={ChangePasswordPage} /> }, // 비밀번호 변경
    // { path: '/account/manage', Component: () => <PrivateRoute Component={AccountManagementPage} /> }, // 계정관리
    // { path: '/account/create', Component: () => <PrivateRoute Component={AccountCreatePage} /> }, // 계정 생성
    // { path: '/account/change-password', Component: () => <PrivateRoute Component={AccountChangePasswordPage} /> }, // 계정 비밀번호 변경

    // { path: '/board/create', Component: () => <PrivateRoute Component={BoardCreatePage} /> }, // 게시글 등록
    // { path: '/board/all', Component: () => <PrivateRoute Component={BoardListPage} /> }, // 전체 게시글
    // { path: '/board/:id', Component: () => <PrivateRoute Component={BoardDetailPage} /> }, // 게시글 상세보기
    // { path: '/board/:id/edit', Component: () => <PrivateRoute Component={BoardEditPage} /> }, // 게시글 수정

    // { path: '/partners', Component: () => <PrivateRoute Component={PartnerListPage} /> }, // 파트너사 목록
    // { path: '/partners/create', Component: () => <PrivateRoute Component={PartnerCreatePage} /> }, // 파트너사 등록
    // { path: '/partners/:id', Component: () => <PrivateRoute Component={PartnerDetailPage} /> }, // 파트너사 상세보기
    // { path: '/partners/:id/edit', Component: () => <PrivateRoute Component={PartnerEditPage} /> }, // 파트너사 수정

    // { path: '/certifications', Component: () => <PrivateRoute Component={CertificationListPage} /> }, // 인증 목록
    // { path: '/certifications/create', Component: () => <PrivateRoute Component={CertificationCreatePage} /> }, // 인증 등록
    // { path: '/certifications/:id', Component: () => <PrivateRoute Component={CertificationDetailPage} /> }, // 인증 상세보기
    // { path: '/certifications/:id/edit', Component: () => <PrivateRoute Component={CertificationEditPage} /> }, // 인증 수정

    // { path: '/popups', Component: () => <PrivateRoute Component={PopupListPage} /> }, // 팝업 목록
    // { path: '/popups/create', Component: () => <PrivateRoute Component={PopupCreatePage} /> }, // 팝업 등록
    // { path: '/popups/:id', Component: () => <PrivateRoute Component={PopupDetailPage} /> }, // 팝업 상세보기
    // { path: '/popups/:id/edit', Component: () => <PrivateRoute Component={PopupEditPage} /> }, // 팝업 수정

    // { path: '/banners', Component: () => <PrivateRoute Component={BannerManagementPage} /> }, // 배너 관리

    // { path: '/files', Component: () => <PrivateRoute Component={FileListPage} /> }, // 파일 목록
    // { path: '/files/create', Component: () => <PrivateRoute Component={FileCreatePage} /> }, // 파일 등록
    // { path: '/files/:id', Component: () => <PrivateRoute Component={FileDetailPage} /> }, // 파일 상세보기
    // { path: '/files/:id/edit', Component: () => <PrivateRoute Component={FileEditPage} /> }, // 파일 수정

    // { path: '/visitors', Component: () => <PrivateRoute Component={VisitorManagementPage} /> }, // 접속자 관리

    { path: '/login', Component: LoginPage }, // 로그인
    { path: '/', Component: MainPage }, // 메인페이지
    { path: '/change-password', Component: ChangePasswordPage }, // 비밀번호 변경

    { path: '/account/manage', Component: AccountManagementPage }, // 계정관리
    { path: '/account/create', Component: AccountCreatePage }, // 계정 생성
    { path: '/account/change-password', Component: AccountChangePasswordPage }, // 계정 비밀번호 변경

    { path: '/board/create', Component: BoardCreatePage }, // 게시글 등록
    { path: '/board/all', Component: BoardListPage }, // 전체 게시글
    { path: '/board/news', Component: BoardListPage }, // 뉴스
    { path: '/board/activities', Component: BoardListPage }, // 주요 활동
    { path: '/board/industry-news', Component: BoardListPage }, // 업계 소식
    { path: '/board/announcements', Component: BoardListPage }, // 공지사항
    { path: '/board/:id', Component: BoardDetailPage }, // 게시글 상세보기
    { path: '/board/:id/edit', Component: BoardEditPage }, // 게시글 수정
    // 추후 변경코드
    // { path: '/board/:category', Component: BoardListPage }, // 하나의 라우트로 처리

    { path: '/partners', Component: PartnerListPage }, // 파트너사 목록
    { path: '/partners/create', Component: PartnerCreatePage }, // 파트너사 등록
    { path: '/partners/:id', Component: PartnerDetailPage }, // 파트너사 상세보기
    { path: '/partners/:id/edit', Component: PartnerEditPage }, // 파트너사 수정

    { path: '/certifications', Component: CertificationListPage }, // 인증 목록
    { path: '/certifications/create', Component: CertificationCreatePage }, // 인증 등록
    { path: '/certifications/:id', Component: CertificationDetailPage }, // 인증 상세보기
    { path: '/certifications/:id/edit', Component: CertificationEditPage }, // 인증 수정

    { path: '/popups', Component: PopupListPage }, // 팝업 목록
    { path: '/popups/create', Component: PopupCreatePage }, // 팝업 등록
    { path: '/popups/:id', Component: PopupDetailPage }, // 팝업 상세보기
    { path: '/popups/:id/edit', Component: PopupEditPage }, // 팝업 수정

    { path: '/banners', Component: BannerManagementPage }, // 배너 관리

    { path: '/files', Component: FileListPage }, // 파일 목록
    { path: '/files/create', Component: FileCreatePage }, // 파일 등록
    { path: '/files/:id', Component: FileDetailPage }, // 파일 상세보기
    { path: '/files/:id/edit', Component: FileEditPage }, // 파일 수정

    { path: '/visitors', Component: VisitorManagementPage }, // 접속자 관리
];
