/* eslint-disable indent */
/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    for (let i = 0; i < table.tBodies[0].rows.length; i++) {
        const element = table.tBodies[0].rows[i];
        for (let j = 0; j < element.cells.length; j++) {
            element.cells[i].style.backgroundColor = "red";
        }
    }
}