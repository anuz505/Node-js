const express =  require('express')
const app = express()

app.get('/',(req,res)=>{
    console.log('user hit the response');
    res.send('home page')
})

app.get('/about',(req,res)=>{
    res.send('about page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource is not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening');
})
//app.get
//app.post
//app.put
//app.delete
//app.all