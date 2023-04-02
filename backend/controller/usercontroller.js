const User=require('../models/usermodel')
const asyncHandler = require('express-async-handler')

const register=asyncHandler(async(req,res,next)=>{

  console.log('good');

      const{names,email,password}=req.body;

      if(!names||!email||!password){
        res.status(400)
        throw new Error('fill the full detail')
      }
      const userexists=await User.findOne({email})
      if(userexists){
        const error = new Error('User already exist');
        error.status = 404;
        next(error);
      }
      const user=await User.create({
        name:names,email,password
      })
      if(user){
          res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email
          })
      }
      
})
const login=asyncHandler(async(req,res)=>{
    console.log(req.body);
    const{email,password}=req.body;

    if(!email || !password){
      res.status(400)
      throw new Error('fill the full detail')
    }
    const userexists=await User.findOne({email})
    if(userexists && password===userexists.password ){
        res.status(201).json({
            _id:userexists._id,
            name:userexists.name,
            email:userexists.email
          })
   
    }else{
        res.status(400)
        throw new Error('invalid password or email')
    }
   
   
    
})



module.exports={
    register,login
};