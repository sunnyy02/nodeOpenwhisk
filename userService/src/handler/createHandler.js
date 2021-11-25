'use strict';
const openwhisk = require('openwhisk');

const triggerSlack = async params => {
  const name = 'newUserTrigger';
  const ow = openwhisk();
  await ow.triggers.invoke({name, params});
}

 async function createUser(user){
  console.log('create user');
  const newUser = {name: user.name || 'Peter', age: user.age || 20};
  // Save user to database ....
  await triggerSlack(newUser);

  return newUser;
}

exports.user = createUser;


