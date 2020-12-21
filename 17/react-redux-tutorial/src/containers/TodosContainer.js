import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChangeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';
import useActions from '../lib/useActions'

// TodosContainer를 Hooks로 전환하기 (connect 함수 대신)
const TodosContainer = () => {
    const { input, todos } useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos
    }));
    // const dispatch = useDispatch();
    // const onChangeInput = useCallback(input => dispatch(ChangeInput(input)), [
    //     dispatch
    // ]);
    // const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    // const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    // const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

    // 대신 useActions 유틸 Hook 사용
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
        [ChangeInput, insert, toggle, remove],
        []
    );

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};

export default TodosContainer;