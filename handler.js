'use strict';

function hello() {
  const name =  'World';
  console.log('log', { payload: `Hello, ${name}` });
  return { payload: `Hello, ${name}!` };
}

exports.hello = hello;
