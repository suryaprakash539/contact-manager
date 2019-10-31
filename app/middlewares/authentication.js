const User = require('../models/user')

const authenticateUser=function(req,res,next){
    const token = req.header('x-auth')
        User.findByToken(token)
          .then(function(user){
              if(user){
              req.user=user
              req.token=token
              next()
              }
              else{
                  res.send('token not available')
              }
          })
          .catch(function(err){
              res.json(err)
          })
}

module.exports={
    authenticateUser
}