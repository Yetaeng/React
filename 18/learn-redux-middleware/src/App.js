import React from 'react';
// import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';
// 리덕스 모듈이 변경되기는 했지만, 기존에 사용 중이던 thunk 함수와 똑같은 이름으로 액션 생성 함수를 만들었기 때문에
// 컨테이너 컴포넌트에서 수정해야 할 것은 없다.

const App = () => {
  return (
    <div>
      <SampleContainer />
    </div>
  );
};

export default App;