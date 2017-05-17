## Redux基础使用：
简介：这里是从需求来响应的执行操作redux，所以理解起来更加的容易  
铭记在心的三点：action／reducer／store 除此之外就是react／react native的基础组件
#### 需求：实现一个数字的加减1和重置
##### 实现：
1:在组件内部使用this.setState（）来操控  
2:将数据独立起来，使用redux来操控  
这里阐述第二种类：
首先下npm下依赖： 
```js
    "react-redux": "^4.4.5",
    "redux": "^3.5.2",
```
1：创建actionTyprs，定义执行的类型名称
```js
export const INCREASE = 'INCREASE';//加
export const DECREASE = 'DECREASE';//减
export const RESET = 'RESET';//重置
```
2:创建actions.js,action的函数，给组件使用 
```js
import { INCREASE, DECREASE, RESET } from './actionsTypes';
const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });
// const reset = () => ({ type: RESET });
var reset = function reset(JD) {
  console.log("case"+JD);
  return { type: RESET,
    parms:JD//从组件那边传递来的参数
  };
};

export {
    increase,
    decrease,
    reset
}

```
3：创建reducer.js（具体怎么操作）
```js
import { combineReducers } from 'redux';
import { INCREASE, DECREASE, RESET} from './actionsTypes';
// 原始默认state,数据
const defaultState = {
  count: 0,
  factor: 1
}
//这里数据是从defaultState或者从组件那边过来，也就实现了数据的传递
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

```
4:创建全局的store.js,存放共享数据  
```js
import { createStore, applyMiddleware, compose } from 'redux';
// import createLogger from 'redux-logger';
import rootReducer from './reducers';
const configureStore = preloadedState => {
    return createStore (
        rootReducer,
        // preloadedState,
        // compose (
        //     applyMiddleware(createLogger())
        // )
    );
}

const store = configureStore();

export default store;

```
5: 将redux和react／react native的组件结合
 ```js
 import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './home';
import store from './store';

export default class test extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}

 ```
 
 6:具体的页面的组件：
 ```js
 import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { increase, decrease, reset } from './actions';

class Home extends Component {
  _onPressReset() {
    this.props.dispatch(reset(80));
  }

  _onPressInc() {
    this.props.dispatch(increase());
  }

  _onPressDec() {
    this.props.dispatch(decrease());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counter}>{this.props.counter.count}</Text>
        <TouchableOpacity style={styles.reset} onPress={()=>this._onPressReset()}>
          <Text>归零</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.start} onPress={()=>this._onPressInc()}>
          <Text>加1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.stop} onPress={()=>this._onPressDec()}>
          <Text>减1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  counter: {
    fontSize: 50,
    marginBottom: 70
  },
  reset: {
    margin: 10,
    backgroundColor: 'yellow'
  },
  start: {
    margin: 10,
    backgroundColor: 'yellow'
  },
  stop: {
    margin: 10,
    backgroundColor: 'yellow'
  }
})

const abc = state => ({
    counter: state.counter
})

export default connect(abc)(Home);

 ```

