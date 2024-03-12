//Modules - encapsulated code (only share minimum or what we want)
//every file in node is module.

const names = require('./04-name')
console.log(names);
const sayHI = require('./05-utils')
const data = require('./06-alternative')
/* console.log(data); */

//this is alternative syntax
require('./07-mind-grenade')
sayHI('susan');
sayHI(names.peter);


