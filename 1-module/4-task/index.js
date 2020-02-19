/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  str = str.toLowerCase();
  let checkString = ["1xBet", "XXX"];

  for (let i = 0; i < checkString.length; i++) {
    const element = checkString[i].toLowerCase();
    console.log(element);
    
    if (str.includes(element)) {
      return true;
    }
  }
  return false;
}
