// 액션 타입 정의하기
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

// 액션 생성 함수 만들기(파라미터 필요)
export const ChangeInput = input => ({
    type: CHANGE_INPUT,
    input
});

let id = 3; // insert가 호출될 때마다 1씩 더해짐
export const insert = text => ({
    type: INSERT,
    todo: {
        id: id++, // 액션 객체를 만들 때 파라미터 외에 id 값에도 의존함
        text,
        done: false
    }
});

export const toggle = id => ({
    type: TOGGLE,
    id
});

export const remove = id => ({
    type: REMOVE,
    id
});

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

function todos(state = initialState, action) {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input
            };
        case INSERT:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, done: !todo.done } : todo
                    )
            };
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        default:
            return state;
    }
}

export default todos;