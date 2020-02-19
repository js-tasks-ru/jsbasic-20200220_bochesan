/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str.length == 0) {
    return str;
  }
  else if (str) {
    let string = str[0].toUpperCase() + str.slice(1);
    return string;
  }
  else {
    return false;
  }
}
