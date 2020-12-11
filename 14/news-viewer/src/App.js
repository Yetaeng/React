import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

// App에서 category상태 useState로 관리하기
const App = () => {
  const [Category, setCategory] = useState('all');
  // category 값을 업데이트하는 함수
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      {/* category와 onSelect 함수를 Categories 컴포넌트에게 props로 전달 */}
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;