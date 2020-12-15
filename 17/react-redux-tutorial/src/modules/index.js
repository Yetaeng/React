// 리듀서를 여러 개 만들었으므로, 이를 하나로 합쳐 나중에 스토어를 만들 때 리듀서 하나만 사용할 수 있어야 한다.

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// combineReducers라는 유틸 함수를 사용해 두 개의 리듀서를 하나로 합친다.
const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;