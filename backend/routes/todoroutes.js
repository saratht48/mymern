const express=require('express')
const {addtodo,gettodos}=require('../controller/todocontroller')
const router=express.Router()



router.post('/',addtodo)
router.get('/',gettodos)
//router.post('/deletetodo',login)
//router.get('/gettodo',login)



module.exports=router