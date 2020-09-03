/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  for (let i = 0; i < table.tBodies[0].rows.length; i++) {
    const tableRow = table.tBodies[0].rows[i];

    if (!tableRow.cells[3].dataset.available) {
      tableRow.setAttribute("hidden", "true");
    } else if (tableRow.cells[3].dataset.available == "true") {
      tableRow.classList.add("available");
    } else if (tableRow.cells[3].dataset.available == "false") {
      tableRow.classList.add("unavailable");
    }

    if (tableRow.cells[2].innerText == "m") {
      tableRow.classList.add("male");
    } else if (tableRow.cells[2].innerText == "f") {
      tableRow.classList.add("female");
    }

    if (+tableRow.cells[1].innerText < 18) {
      tableRow.style.textDecoration = "line-through";
    }

  }
}
