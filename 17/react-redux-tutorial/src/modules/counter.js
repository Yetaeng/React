// <Counter 모듈 작성하기>
// 1. 액션 타입 정의하기
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. 액션 생성 함수 만들기(export 키워드를 넣어 추후 해당 함수를 다른 파일에서 불러올 수 있도록 함)
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 3. 초기 상태 및 리듀서 함수 만들기
const initialState = {
    number: 0
}

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1
            };
        case DECREASE:
            return {
                number: state.number - 1
            };
        default:
            return state;
    }
}

export default counter; // 단순 export는 여러 개 보낼 수 있지만, export default는 한 개만 가능
