const express = require('express')
const app =  express()
const logger = require('./logger')
//req  => middleware =>res

app.use(logger)  //this applies to all the routes it invokes the function

app.get('/',(req,res)=>{   //here logger is middleware
    
    res.send('Home')
})
app.get('/about',(req,res)=>{
    res.send('About')
})
app.get('/api/products',(req,res)=>{
    res.send('products')
})
app.get('/api/items',(req,res)=>{
    res.send('Items')
})
app.listen(5000,()=>{
    console.log('server is listening to port 5000')
})