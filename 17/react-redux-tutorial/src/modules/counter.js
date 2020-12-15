import { createAction, handleActions } from 'redux-actions';

// 1. 액션 타입 정의하기
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. 액션 생성 함수 만들기(redux-actions의 createAction 함수 사용)
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 3. 초기 상태 및 리듀서 함수 만들기
const initialState = {
    number: 0
}

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        [DECREASE]: (state, action) => ({ number: state.number - 1 }),
    },
    initialState,
);

export default counter; // 단순 export는 여러 개 보낼 수 있지만, export default는 한 개만 가능
