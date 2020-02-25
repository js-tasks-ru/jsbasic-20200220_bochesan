/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let arr = str.split("-");
  for (let i = 1; i < arr.length; i++) {
    let element = arr[i];
    element = element.split("");
    element[0] = element[0].toUpperCase();
    element = element.join("");
    arr[i] = element;
  }
  arr = arr.join("");
  return arr;
}
