const asyncHandler = require('express-async-handler')
const Todo=require('../models/todolist')

const addtodo=asyncHandler(async(req,res,next)=>{
    const{todo,status,user}=req.body;

    const created=await Todo.create({
        user,
        todo,
        status,
    })
    console.log(created)
    if(created){
        res.status(201).json(created)
    }else{
        console.log('not created')
    }
})
const gettodos=asyncHandler(async(req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    if(token){
        const todos=await Todo.find({user:token})

        if(todos){
            res.status(200).json(todos)
        }
    }else{
        const error = new Error('verification failed');
        error.status = 404;
        next(error);
    }
  
  
   
     

})

module.exports={
    addtodo,gettodos
}