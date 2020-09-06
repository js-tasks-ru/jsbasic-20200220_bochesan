/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательное свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */

  this.createTable = () => {
    let tbody = "";

    for (let i = 0; i < items.length; i++) {
      const row = items[i];
      let tr = "";

      for (const key in row) {
        if (row.hasOwnProperty(key)) {
          tr += `<td>${row[key]}</td>`;
        }
      }
      tbody += `<tr>${tr}</tr>`;
    }

    let table = `<thead>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Salary</td>
                  <td>City</td>
                </thead>
                <tbody>
                  ${tbody}
                </tbody>`;

    this.el.innerHTML = table;
  }

  this.createTable();

  this.sort = (column, desc = false) => {
    let index;

    switch (column) {
      case 0:
        index = 'name';
        break;
      case 1:
        index = 'age';
      break;
      case 2:
        index = 'salary';
      break;
      case 3:
        index = 'city';
      break;
      default:
        return;
    }
    
    if ((column == 1 || column == 2) && desc) {
      items.sort((a, b) => b[index] - a[index]);
    } else if ((column == 1 || column == 2) && !desc) {
      items.sort((a, b) => a[index] - b[index]);
    } else if ((column == 0 || column == 4) && !desc) {
      items.sort((a, b) => a[index].toLowerCase() > b[index].toLowerCase() ? 1 : -1);
    } else if ((column == 0 || column == 4) && desc) {
      items.sort((a, b) => a[index].toLowerCase() < b[index].toLowerCase() ? 1 : -1);
    }

    this.createTable();
  };
}
