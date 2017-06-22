//创建reducer,传入初始化的状态，和需要改变的元素描述：action
//初始化状态
const initialState={
    defaultNum:10};
export function add(state=initialState,action){
    console.log("方法种类"+action.type);
    switch (action.type) {
        case "ADD_ONE":
            let ss=Object.assign({},state,{defaultNum:state.defaultNum+1})
            return ss;
        case "DEL":
            let bb=Object.assign({},state,{defaultNum:state.defaultNum-1})
            return bb;
        default:
            return state;
    }
}
