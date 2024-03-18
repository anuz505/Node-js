const EventEmitter =  require('events'); //eventemmitter is a class
const customEmitter =  new EventEmitter() //instance

customEmitter.on('response',(name,id)=>{
    console.log(`data recieved ${name},${id}`);
})

customEmitter.on('response',()=>{
    console.log(`some other logic here`);
})

customEmitter.emit('response','john',34)
