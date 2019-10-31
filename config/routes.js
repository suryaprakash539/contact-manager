const express = require('express')
const router = express.Router()

const contactController = require('../app/controllers/contactController')
const userController = require('../app/controllers/userController')

const {authenticateUser}= require('../app/middlewares/authentication')

router.post('/contacts',authenticateUser,contactController.create)
router.get('/contacts',authenticateUser,contactController.list)
router.get('/contacts/:id',authenticateUser,contactController.show)
router.delete('/contacts/:id',authenticateUser,contactController.destroy)
router.put('/contacts/:id',authenticateUser,contactController.update)


router.post('/users/register',userController.register)
router.post('/users/login',userController.login)
router.get('/users/account',authenticateUser,userController.account)
router.delete('/users/logout',authenticateUser,userController.logout)

module.exports=router