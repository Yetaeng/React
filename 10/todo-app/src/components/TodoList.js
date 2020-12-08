import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    const rowRenderer = useCallback(
        ({ index, key, style }) => {
            const todo = todos[index];
            return (
                <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );
    return (
        <List
            className="TodoList"
            width={512} // 전체 크기
            height={513} // 전체 높이
            rowCount={todos.length} // 항목 개수
            rowHeight={56} //  항목 높이
            rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수(이 함수를 List 컴포넌트의 props로 설정해 주어야함)
            list={todos} // 배열
            style={{ outline: 'none' }} // List에 기본 적용되는 outline 스타일 제거
        />
    );
};

export default React.memo(TodoList); // 최적화 작업
// App 컴포넌트는 todos 배열이 업데이트될 때 리렌더링되는데, App 컴포넌트에 다른 state가 추가되어 해당 값들이 업데이트될 때는 
// Todolist 컴포넌트가 불필요한 리렌더링을 할 수도 있다. 이를 방지하기위해 미리 최적화작업을하는 것이다.