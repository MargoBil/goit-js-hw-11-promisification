'use strict';
const users = [
  {name: 'Mango', active: true},
  {name: 'Poly', active: false},
  {name: 'Ajax', active: true},
  {name: 'Lux', active: false},
];

// with callback:
// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );
//   callback(updatedUsers);
// };

// with Promise:
const toggleUserState = (allUsers, userName) => {
  return new Promise (resolve => {
    setTimeout (() => {
      const updatedUsers = allUsers.map (
        user =>
          user.name === userName ? {...user, active: !user.active} : user
      );
      resolve(updatedUsers);
    }, 0);
  });
};

const logger = updatedUsers => console.table (updatedUsers);

/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);

/*
 * Должно работать так
 */
toggleUserState (users, 'Mango').then (logger);
toggleUserState (users, 'Lux').then (logger);
