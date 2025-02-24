import axios from 'axios';

// 🔹 프록시를 활용하여 요청을 `/api`로 전송 (Vite가 자동으로 백엔드로 프록시)
const apiClient = axios.create({
    baseURL: '/api', // ✅ Vite 프록시가 자동으로 `http://192.168.0.48:9092`로 변환
    timeout: 5000, // 타임아웃 설정
    headers: {
        'Content-Type': 'application/json',
    },
});

// 🔹 요청 인터셉터 (토큰 자동 추가)
apiClient.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error),
);

// 🔹 응답 인터셉터 (에러 처리)
apiClient.interceptors.response.use(
    response => response,
    error => {
        console.error('API 요청 오류:', error);
        return Promise.reject(error);
    },
);

export default apiClient;
