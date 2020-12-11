import React from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // path에 ?가 들어간 것은 category 값이 선택적이라는 의미이다. (있든가 없든가)
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;