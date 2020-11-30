import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

//* 리서를 합해줌 */
const rootReducer = combineReducers({
  counter,
  todos
});

export default rootReducer;