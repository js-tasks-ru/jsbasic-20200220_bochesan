/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {
    min: 0,
    max: 0
  };

  str = str.split(',').join(' ');
  let spliting = str.split(' ');

  for (let item of spliting) {
    if (Number(item)) {
      if (Number(item) > result.max) {
        result.max = Number(item);
      }
      if (Number(item) < result.min) {
        result.min = Number(item);
      }
    }
  }
  return result;
}