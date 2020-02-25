/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let names = [];

  for (let i = 0; i < users.length; i++) {
    const element = users[i];

    names.push(element.name);
  }

  return names;
}
