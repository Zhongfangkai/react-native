//由于fetch没有原生的timeout设置，故通过setTimeout引发reject操作
import { DeviceEventEmitter,AsyncStorage } from 'react-native';

module.exports=function _fetch(fetch_promise, timeout) {
    /*convStore.getTokenExpDate((msg)=> {
     let nowTime=new Date().getTime();
     let tokenEndTime=msg;

     })*/
    let nowTime=Number(new Date().getTime());
    let tokenEndTime=Number(convStore.getTokenExpDate2());
    // let tokenEndTime=1492192231688;
    // AsyncStorage.getItem("tokenExpDate")
    //   .then((value) => {
    //     console.log('value',value)
    //   })
    //   .catch((error) => console.log('AsyncStorage error: ' + error.message))
    //   .done();
    // console.log('nowTime',nowTime,'tokenEndTime',tokenEndTime);
    if(nowTime<(tokenEndTime-60*1000)){
        var abort_fn = null;
        //这是一个可以被reject的promise
        var abort_promise = new Promise(function(resolve, reject) {
            abort_fn = function() {
                reject('访问超时');
            };
        });

        //这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
        var abortable_promise=Promise.race([
            fetch_promise,
            abort_promise
        ]);
        setTimeout(function() {
            abort_fn();
        },timeout);//timeout

        return abortable_promise;
    }else{
        //token失效
        DeviceEventEmitter.emit('refreshToken','token无效');
        return new Promise(function(resolve, reject) {
            abort_fn = function() {
                reject('token失效重新登录');
            };
        });
    }
}
