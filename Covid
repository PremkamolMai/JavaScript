const { template } = require('@babel/core')

//put your student id, name, and surname here
function countCovidStatus(covidStatusArray) {
  let lowrisk = 0;
  let highrisk = 0;
  let positive = 0;

  if(covidStatusArray === null || covidStatusArray === undefined){
    return undefined
  }else if(covidStatusArray.length === 0  ){
    return {}

  }else {
    for (let status of covidStatusArray){
      if(status === 'negative and low risk'){
        lowrisk++
    }else if(status === 'positive'){
      positive++
    }else if(status === 'negative and high risk'){
      highrisk++
  }
}
}
    let statuscount = {}
      if(lowrisk > 0){
        statuscount['negative and low risk']=lowrisk
      }if(highrisk > 0){
        statuscount['negative and high risk']=highrisk
      }if(positive >0){
        statuscount['positive']=positive
      }
  return statuscount
}
      
module.exports = countCovidStatus

---------------------------------------------------------------
# countCovidStatus

#### ข้อกำหนดในการสอบ

\*\*\* ให้ใส่คอมเมนต์เป็นรหัส ชื่อ-นามสกุล ลงใน source code ที่ submit นักศึกษาที่ไม่ใส่จะถูกหักคะแนน 50% ของคะแนนสอบ \*\*\*

ข้อ 1. ให้เขียน Function ชื่อ countCovidStatus (covidStatusArray) เพื่อ return object ที่แสดงรายการสถานะที่แตกต่างกันและจำนวนคนที่อยู่ในสถานะนั้น โดยสถานะโควิดของทุกคนเก็บอยู่ในพารามิเตอร์ covidStatusArray ซึ่งมี 3 สถานะ ได้แก่ 'negative and low risk', 'negative and high risk', 'positive' (case sensitive)

- กรณี covidStatusArray เป็น null หรือ undefined ให้คืนค่าเป็น undefined

- กรณี covidStatusArray เป็น empty array [ ] ให้คืนเป็น empty object { }

- กรณี covidStatusArray ปรากฎรายการที่ไม่ใช่สถานะโควิดที่กำหนด ไม่ต้องนับรายการนั้น และถ้าไม่มีรายการอื่นที่ต้องนับ ให้คืนเป็น empty object { }

- ตัวอย่างเช่น
  - covidStatusArray = ['negative and low risk', 'positive', 'negative and low risk', 'negative and high risk', 'positive', 'negative and low risk' ] return { 'negative and low risk': 3, positive: 2, 'negative and high risk': 1}

  - covidStatusArray = ['positive', 'negative and low risk', 'positive' ] 
  return { 'negative and low risk’: 1, 'positive' : 2}

  - covidStatusArray = ['negative and low risk', 'positive', 'negative and low risk', 'abnormal', 'negative and high risk', 'positive', ' normal' ] return { 'negative and low risk’: 2, positive: 2, 'negative and high risk': 1}

  - covidStatusArray = ['covid'] return { }
  - covidStatusArray = [ ] return { }
  - covidStatusArray = null return undefined
  - covidStatusArray = undefined return undefined

'negative and low risk',
'positive',
'negative and low risk'
