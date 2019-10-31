const express = require('express')
const configureDB= require('./config/database')
const router = require('./config/routes')
const cors = require('cors')
const port = 3060
const app = express()


configureDB()

app.use(express.json())
app.use(cors())

app.use('/',router)

app.listen(port,()=>{
    console.log('listening to the port',port)
})