const express = require ('express')
const User = require ('../models/user')

module.exports.register=(req,res)=>{
    const body=req.body
    const user= new User(body)
      user.save()
        .then((user)=>{
            //serializing response
            const {_id,username,email}=user
            res.json({_id,username,email})
        })
        .catch(err=>{
            res.json(err)
        })
}


module.exports.login=(req,res)=>{
    const body = req.body
    User.findByCredentials(body.email,body.password)
      .then(function(user){
          return user.generateToken()
      })
      .then(function(token){
          res.json({token})
      })
      .catch(function(err){
          res.json(err)
      })
      .catch(function(err){
          res.json(err)
      })
   /* User.findOne({email:body.email})
     .then((user)=>{
         if(!user)
         {
             res.status('404').send('invalid email/password')
         }
        bcryptjs.compare(body.password,user.password)
          .then(function(result){
              if(result)
              {
                  res.json(user)
              }
              else{
                  res.status('404').send('invalid email/password')
              }
          })
     })
     .catch(err=>{
         res.json(err)
     })*/
}

module.exports.account=function(req,res){
    const {_id,username,email}=req.user
           res.json({_id,username,email})
        
    }

module.exports.logout=function(req,res){
    const {user,token}=req
    User.findByIdAndUpdate(user._id,{$pull:{tokens:{token:token}}})
      .then(function(){
          res.send('successfully logged out')
      })
      .catch(err=>{
          res.send(err)
      })
}



