"use strict";

function listUser(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("get list of users from a repository...");
      const result = { users: [{ name: "John", age: 40 }] };
      if (params && params.name) {
        const newUser = { name: params.name, age: params.age };
        result.users.push(newUser);
      }
      resolve(result);
    }, 1000);
  });
}

exports.user = listUser;
