import React from 'react';
// import ColorContext from '../contexts/color';
import { ColorConsumer } from '../contexts/color';

const ColorBox = () => {
    return (
        <ColorConsumer>
        {/* // 색상을 props로 받아 오는 거싱 아니라 ColorContext 안에 들어 있는 Consumer라는 컴포넌트를 통해 조회
        <ColorContext.Consumer> */}
        {/* Consumer 사이에 중괄호를 열어 함수를 넣어줌 -> Function as a child || Render Props */}
        {/* 객체 비구조화 할당 문법 사용 */}
            {({ state}) => (
                <>
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            background: state.color
                        }}
                    />
                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: state.subcolor
                        }}
                    />
                </>
            )}
        {/* </ColorContext.Consumer> */}
        </ColorConsumer>
    )
}

export default ColorBox;