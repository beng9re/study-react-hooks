import { combineReducers } from 'redux';
import counter from './counter';
// 메인 루트 리듀서 

const rootRedoucer = combineReducers({counter});

export default rootRedoucer;