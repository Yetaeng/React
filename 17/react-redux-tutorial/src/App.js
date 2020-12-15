import React from 'react';
import Todos from './components/Todos';
// import Counter from './components/Counter'; -> CounterContainer로 교체
import CounterContainer from './containers/CounterContainer';
// import Todos from './components/Todos'; -> TodosContainer로 교체
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      {/* <Counter number={0} /> */}
      <CounterContainer />
      <hr />
      {/* <Todos /> */}
      <TodosContainer />
    </div>
  );
};

export default App;