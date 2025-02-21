// 유저 정보 응답 데이터 가공
export const formatUserResponse = data => {
    return {
        id: data.id,
        name: data.name,
        email: data.email,
        joinedDate: new Date(data.created_at).toLocaleDateString(),
    };
};
