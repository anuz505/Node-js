const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('request event');
    res.end('Hello fucking world');
})

server.listen(5000,()=>{
    console.log('server is listening to port 5000.......');
})