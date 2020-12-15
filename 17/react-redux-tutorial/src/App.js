import React from 'react';
// import Counter from './components/Counter'; -> CounterContainer로 교체
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      {/* <Counter number={0} /> */}
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;