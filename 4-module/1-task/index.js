let friends = [
  {
    firstName: 'Artsiom',
    lastName: 'Mezin'
  },
  {
    firstName: 'Ilia',
    lastName: 'Kantor'
  },
  {
    firstName: 'Christopher',
    lastName: 'Michael'
  }
];

function makeFriendsList(friends) {
  // ваш код...
  let ul = document.createElement('ul');
  for (i = 0; i < friends.length; i++) {
    let li = document.createElement('li');
    li.textContent = friends[i].firstName + '\u0020' + friends[i].lastName;
    ul.appendChild(li);
  }
  return ul;
}
makeFriendsList(friends);
