import React from 'react';
import ColorBox from './contexts/ColorBox';
// import ColorContext from './contexts/color';
import { ColorProvider } from './contexts/color';
import SelectColors from './contexts/SelectColors';

const App = () => {
  return (

    <ColorProvider>
    {/* // Provider를 사용하면 Context의 value를 변경할 수 있다. 이때 꼭 value 값을 명시해주어야 에러가 안난다. */}
    {/* <ColorContext.Provider value={{ color: 'red' }}> */}
      <div>
        <SelectColors />
        <ColorBox />
      </div>  
    {/* </ColorContext.Provider> */}
    </ColorProvider>
  )
}

export default App;