import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

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

//  immer 사용
const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload: input }) => 
            produce(state, draft => {
                draft.input = input;
            }),
        [INSERT]: (state, { payload: todo}) => 
            produce(state, draft => {
                draft.todos.push(todo);
            }),
        [TOGGLE]: (state, { payload: id}) => 
            produce(state, draft => {
                const todo = draft.todos.find(todo => todo.id === id);
                todo.done = !todo.done;
            }),
        [REMOVE]: (state, { payload: id}) =>
            produce(state, draft => {
                const index = draft.todos.findIndex(todo => todo.id === id);
                draft.todos.splice(index, 1);
            }),
    },
    initialState,
);

export default todos;