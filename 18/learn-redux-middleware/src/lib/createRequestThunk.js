import { startLoading, finishLoading } from '../modules/loading'

// 리팩토링 해주기 위해 유틸 함수를 만듬
// 이 함수는 API 요청을 해주는 thunk 함수를 한 줄로 생성할 수 있게 해줌
export default function createRequestThunk(type, request) {
    // 성공 및 실패 액션 타입 정의
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return params => async dispatch => {
        dispatch({ type }); // 시작
        dispatch(startLoading(type));
        try {
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data
            }); // 성공
            dispatch(finishLoading(type))
        } catch (e) {
            dispatch({
                type: FAILURE,
                payload: e,
                error: true
            }); // 에러 발생
            dispatch(startLoading(type))
            throw e;
        }
    };
}
