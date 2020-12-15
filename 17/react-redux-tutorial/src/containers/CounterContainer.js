import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

// useSelector로 상태 조회
const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    // useDispatch를 사용하여 액션 디스패치하기
    // 추가로 useCallback 사용해서 컴포넌트 성능 최적화 해주기
    const dispatch = useDispatch();
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter 
            number={number} 
            onIncrease={onIncrease}
            onIncrease={onDecrease}
        />
    );
};

export default CounterContainer;