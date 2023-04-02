const mongoose= require('mongoose');


const connect=async()=>{
    try{
        const con=await mongoose.connect(process.env.STRING)
        console.log('mongodb connected')
    }
    catch(err){
        console.log('bad')
        console.log(err.message)
    }
     
}
module.exports=connect