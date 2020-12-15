import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// mapStateToProps, mapDispatchToProps 에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달됨
// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수
const mapStateToProps = state => ({
    number: state.counter.number,
});
// 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
const mapDispatchToProps = dispatch => ({
    // 임시 함수
    increase: () => {
        dispatch(increase());
    },
    decrease: () => {
        dispatch(decrease())
    }
});

// connect 함수를 호출하여 리덕스와 연동된 컴포넌트를 만듬
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);
