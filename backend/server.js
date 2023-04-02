const express=require('express')

const dotenv=require('dotenv').config()
const connect=require('./config/db')
const bodyParser = require('body-parser');
const {errorhandler}=require('./middleware/errormiddleware')

connect();
const app=express();
app.use(bodyParser.json());
app.use(express.json())// this will allow us to send raw json from frondend to back end
app.use(express.urlencoded({extended:false}))// to access request body
app.get('/',(req,res)=>{
     res.send('started')
})

app.use('/user',require('./routes/userroutes'))
app.use('/todo',require('./routes/todoroutes'))

app.use(errorhandler)
app.listen(5000,()=>{
    console.log('port is running at 5000')
})