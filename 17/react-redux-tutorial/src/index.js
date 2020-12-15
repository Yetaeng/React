// 스토어를 만들고 리액트 애플리케이션에 리덕스를 적용하는 작업은 이 파일에서 이루어진다.

// 스토어 만들기
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
  );

// serviceWorker.unregister();

