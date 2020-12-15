import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수 만들기(파라미터 필요)
export const ChangeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
// insert는 todo 객체를 액션 객체 안에 넣어 주어야 하므로, 두 번째 파라미터에 text를 넣으면 todo 객체가 반환되는 함수를 넣어줌
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));

export const toggle = createAction(TOGGLE, id => id);

export const remove = createAction(REMOVE, id => id);

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 배우기',
            done: true
        },
        {
            id: 2,
            text: '리액트와 리덕스 사용하기',
            done: false
        }
    ]
};

//  handleActions로 리듀서 재작성
// 액션 생성 함수는 액션에 필요한 추가 데이터를 모두 payload라는 이름으로 사용해서 action.payload 값을 조회하도록 구현 -> 객체 비구조화 할당 문법 사용
const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input}),
        [INSERT]: (state, { payload: todo}) => ({
            ...state,
            todos: state.todos.concat(todo),
        }),
        [TOGGLE]: (state, { payload: id}) => ({
            ...state,
            todos: state.todos.map(todo =>
                todo.id === id ? { ...todo, done: !todo.done } : todo,
            ),
        }),
        [REMOVE]: (state, { payload: id}) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id),
        }),
    },
    initialState,
);

export default todos;