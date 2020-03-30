/* eslint-disable indent */
/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
    let list = friends.map(item => `
        <li>${item.firstName} ${item.lastName}</li>
    `).join('');

    let nameList = document.createElement('ul');

    nameList.innerHTML = `
        ${list}
    `;

    return nameList;
}