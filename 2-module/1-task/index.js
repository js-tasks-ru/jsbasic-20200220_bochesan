/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
    let sum = 0;
    for (const key in salaries) {
        if (typeof salaries[key] === "number") {
          const element = salaries[key];
          sum += element;
        }
    }
    return sum;
}
