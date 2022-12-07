const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  //**_ดัชนีมวลกาย (BMI) = น้ำหนักตัว (กิโลกรัม)/ส่วนสูง(เมตร)<sup>2<sup>_**
  let BMI = weight/(height*height)
  return BMI
}
function getBMIMeaning(weight, height) {
  // - BMI < 18.5 จะแสดงข้อความ "Underweight"
  // - BMI อยู่ในช่วง 18.5 -24.9 จะแสดงข้อความ "Normal weight"
  // - BMI > 25.0 จะแสดงข้อความ "Overweight"
  let BMI = calculateBMI(weight,height)
  if (BMI < 18.5){
    return "Underweight"
  } else if (BMI <= 24.9 && BMI >= 18.5){
    return "Normal weight"
  } else if (BMI > 25.0){
    return "Overweight"
  }
}
module.exports = getBMIMeaning
