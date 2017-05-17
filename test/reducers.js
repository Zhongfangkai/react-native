import { combineReducers } from 'redux';
import { INCREASE, DECREASE, RESET} from './actionsTypes';
// 原始默认state
const defaultState = {
  count: 0,
  factor: 1
}
function counter(state = defaultState, action) {
  console.log("action");
  console.log(action);
  console.log("state");
  console.log(state);
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + state.factor };
    case DECREASE:
      return { ...state, count: state.count - state.factor };
    case RESET:
      return { ...state, count: action.parms };
    default:
      return state;
  }
}

export default combineReducers({
    counter
});
