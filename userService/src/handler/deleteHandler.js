'use strict';

function deleteUser() {
  console.log('delete user');
  return {
    result: "delete successful!"
  }
}

exports.user = deleteUser;
