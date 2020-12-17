import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import rootReducer from './modules'
// import loggerMiddleware from './lib/loggerMidddleware';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// serviceWorker.unregister();

// loggerMiddleware 미들웨어 보다 잘 만들어진 라이브러리 redux-logger 가 있음. 