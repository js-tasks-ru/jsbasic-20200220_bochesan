/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if ((i === a || i === b) || (element === a || element === b) && (i >= a && i <= b)) {
            newArr.push(element);
        }

    }
    return newArr;
}