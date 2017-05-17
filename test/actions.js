import { INCREASE, DECREASE, RESET } from './actionsTypes';

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
// const reset = () => ({ type: RESET });
var reset = function reset(JD) {
  console.log("case"+JD);
  return { type: RESET,
    parms:JD
  };
};



export {
    increase,
    decrease,
    reset
}
