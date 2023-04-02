const mongoose = require('mongoose')
 const Todoschema=mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
        todo:{
            type:String,
            required:[true,'please add a todo'],
            unique:true,
        },
        status:{
            type:String,
            required:[true,'please select a status'],
            enum:['Important','Not Important']
        },
 },{
    timestamps:true,
 })
  module.exports=mongoose.model('Todo',Todoschema)