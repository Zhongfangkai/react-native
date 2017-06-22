/**
 * Created by zhangyi on 2017/5/8.
 */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Tools {

  //创建时间数据源
  createDateData(startYear,endYear) {
    let date = [];
    for(let i=Number(startYear);i<Number(endYear);i++){
      let month = [];
      for(let j = 1;j<13;j++){
        let day = [];
        if(j === 2){
          for(let k=1;k<29;k++){
            if(k<10){
              day.push("0"+k);
            }else{
              day.push(k);
            }
          }
          if(i%4 === 0){
            day.push(29);
          }
        }
        else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
          for(let k=1;k<32;k++){
            if(k<10){
              day.push("0"+k);
            }else{
              day.push(k);
            }
          }
        }
        else{
          for(let k=1;k<31;k++){
            if(k<10){
              day.push("0"+k);
            }else{
              day.push(k);
            }
          }
        }
        let _month = {};
        if(j<10){
          _month['0'+j] = day;
        }else {
          _month[j] = day;
        }
        month.push(_month);
      }
      let _date = {};
      _date[i] = month;
      date.push(_date);
    }
    return date;
  }

  //将时间戳转换成时间
  timeStamp2String (time){
    var datetime = new Date();
    datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1;
    var date = datetime.getDate();
    return year + "-" + (month<10?"0"+month:month) + "-" + (date<10?"0"+date:date);
  };

}

let tools = new Tools();
module.exports = tools;
