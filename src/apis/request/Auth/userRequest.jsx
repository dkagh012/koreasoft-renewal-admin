import apiClient from '@api/Client';

// 유저 정보 가져오기
export const getUserInfo = userId => apiClient.get(`/users/${userId}`).then(res => res.data);
