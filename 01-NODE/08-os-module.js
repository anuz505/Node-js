const os = require('os')

//info about current user
const user=  os.userInfo()
console.log(user);

//method returns the system uptime in seconds
console.log(`The System uptime is ${os.uptime()}seconds`);

const currentos = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    fremen:os.freemem()
}
console.log(currentos);