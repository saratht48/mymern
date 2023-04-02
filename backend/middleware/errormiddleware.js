const errorhandler=(err,req,res,next)=>{
    console.log(err.status);
    console.log(err.message)
    console.log('hoooooyeh')
    const status = err.status || 500;
    const message = err.message || 'Internal server error';
     res.status(status).json({ message });

 }
 module.exports={errorhandler}