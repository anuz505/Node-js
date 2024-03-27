const express = require('express')
const app =  express()
const morgan =  require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//req  => middleware =>res

app.use(morgan('tiny'))

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
    console.log(req.user)
    res.send('Items')
})
app.listen(5000,()=>{
    console.log('server is listening to port 5000')
})