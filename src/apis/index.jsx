import apiClient from './apiClient';

// 🔹 게시판 목록 조회 API
export const getBoardListRequest = async () => {
    try {
        const response = await apiClient.get('/board/list'); // ✅ `/api/board/list`로 자동 변환됨
        console.log('게시판 목록 응답 데이터:', response.data);
        return response.data;
    } catch (error) {
        console.error('게시판 목록 API 호출 오류:', error);
        return null;
    }
};
