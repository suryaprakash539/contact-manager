const mongoose =require('mongoose')
mongoose.Promise = global.Promise


function configureDB(){
  mongoose.connect('mongodb://localhost:27017/contact-manager',{useNewUrlParser:true})
  .then(()=>{
      console.log('successfully connected to the DB')
  })
  .catch(err=>{
      console.log(err)
  })
}

module.exports=configureDB