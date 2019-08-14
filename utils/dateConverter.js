const twelveToTwenty = function (twelve) {
  
  let strToNum = twelve.length > 6 ?
    +twelve.substr(0, 2)
    : +twelve.substr(0, 1);
  let amPmCrop = twelve.slice(-2).toLowerCase();
  let twelveTransformTwenty = strToNum + 12 === 24 ?
    '00' :
    amPmCrop === 'am'
      ? strToNum = '0' + strToNum :
      strToNum + 12;
  let addingMinToHour = strToNum > 9 ?
    twelve.substr(2, 3) :
    (strToNum <= 9 && twelve.length > 4) ?
      twelve.substr(2, 3) :
      twelve.substr(1, 3);
  
  let twenty = twelveTransformTwenty + addingMinToHour;
  
  if (strToNum > 24 || twelve.length === 5) twenty = null;
  
  return twenty;
};

const twentyToTwelve = function (twenty) {
  
  let strToNum = twenty.length > 4 ?
    +twenty.substr(0, 2)
    : +twenty.substr(0, 1);
  let twentyTransformTwelve = (strToNum % 12) || 12;
  let addingMinToHour = (strToNum > 9) ?
    twenty.substr(2, 3) :
    (strToNum <= 9 && twenty.length > 4) ?
      twenty.substr(2, 3) :
      twenty.substr(1, 3);
  let amPmCheck = strToNum < 12 ?
    ' AM' :
    strToNum === 24 ?
      ' AM' :
      ' PM';
  let twelve = twentyTransformTwelve + addingMinToHour + amPmCheck;
  
  if (strToNum < 0 || strToNum > 24 || twenty.length > 5) twelve = null;
  
  return twelve;
};

//export { twentyToTwelve, twelveToTwenty };
