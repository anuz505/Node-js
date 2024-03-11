//Modules - encapsulated code (only share minimum or what we want)
//every file in node is module.

const names = require('./04-name')
console.log(names);
const sayHI = require('./05-utils')
sayHI('susan');
sayHI(names.peter);
