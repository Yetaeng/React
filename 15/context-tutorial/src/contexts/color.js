import { createContext, useState } from 'react';

const ColorContext = createContext({
    // createContext의 기본값은 실제 Provider의 value에 넣는 객체의 형태와 일치시켜 주는 것이 좋다.
    state: { color: 'black', subcolor: 'red' },
    actions: {
        setColor: () => {},
        setSubcolor: () => {}
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    // 상태는 state로, 업데이트 함수는 actions로 묶어서 전달하는데, 이렇게 하면 나중에 다른 컴포넌트에서 Context의 값을 사용할 때 편리하다.
    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor }
    };
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

// const ColorConsumer = Color.Context.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;