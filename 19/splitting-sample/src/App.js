import React, {useState, Suspense } from 'react';
import logo from './logo.svg'
import './App.css';
import loadable from  '@loadable/component';

const SplitMe = loadable(() => import('./SplitMe'), {
  fallback: <div>loading...</div> // 로딩 중에 다른 UI를 보여주기 위함
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  // 컴포넌트를 미리 불러오는 방법
  const onMouseOver = () => {
    SplitMe.preload();
  }
  return(
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* 마우스 커서를 올리면 로딩이 시작되고, 클릭하면 렌더링이 된다. */}
        <p onClick={onClick} onMouseOver={onMouseOver}>Hello React!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}

export default App;