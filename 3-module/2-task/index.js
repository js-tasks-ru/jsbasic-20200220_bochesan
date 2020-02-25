/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(" ");
  arr = arr.join(",");
  arr = arr.split(",");

  arr.sort((a, b) => a - b);

  let result = {};
  result.min = +arr[0];
  result.max = +arr[arr.length - 1];

  return result;
}
