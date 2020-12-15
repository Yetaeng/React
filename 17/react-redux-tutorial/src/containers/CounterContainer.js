import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// mapDispatchToProps에 해당하는 파라미터를 객체 형태로 넣어주기 (가장 간편한 방법)
// 이 방법은 connect 함수가 내부적으로 bindActionCreators작업을 대신해준다.
export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    },
)(CounterContainer);
