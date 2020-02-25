/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let humansArr = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];

    if (element.age <= age) {
      humansArr.push(element.name + ", " + element.balance);
    }
  }
  let humans = humansArr.join("\n");

  return humans;
}
