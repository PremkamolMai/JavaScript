const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  let maxLengthIndex = [];
    let maxIndex = [];
    let result = [];

    if (arrayOfString === undefined || arrayOfString === null) {
      return undefined;
    }

    for (let i = 0; i < arrayOfString.length; i++) {
      maxLengthIndex[i] = arrayOfString[i].length;
    }
    
    for (let i = 0; i < maxLengthIndex.length; i++) {
      if(maxLengthIndex[i] === Math.max(...maxLengthIndex)) {
         maxIndex.push(i)
      }
    }

    for (let i = 0; i < maxIndex.length; i++) {
      result[i] = arrayOfString[maxIndex[i]]
    }

    return result;
  }
 
module.exports = getMaxLengthString
// ให้เขียน Function ชื่อ getMaxLengthString (arrayOfString) เพื่อ return array ของ String 
//เฉพาะที่มีความยาวของจำนวนตัวอักษรมากที่สุด กรณี arrayOfString มีค่าเป็น null หรือ undefined ให้ return undefined