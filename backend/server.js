const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT   ||  5000
const app = express()
const {errorHandler}= require("./middleware/errorMiddleware")
app.use(express.json())
app.use(express.urlencoded({extended: false}))



app.use('/api/goals', require('./routes/goalroutes'))
//Overrides the express defualt error handler to the on in errorMiddleware
app.use(errorHandler)


app.listen(port, ()=> console.log (`Server started on port ${port}`))

