require('dotenv').config()


const express = require('express')
const mongoose =  require('mongoose')
const workoutroutes= require('./routes/workouts')
//express app
const app= express()

app.use(express.json() )
app.use((req, res, next) => {

console.log(req, req.method)
next()
})
// routes
app.use('/api/workouts',workoutroutes)

// connect to database
mongoose.connect(process.env.MONG_URI)
.then(() => {

    // listen for requests
app.listen((process.env.PORT), () => {
    console.log(" Connected to DB and listening on port", process.env.PORT)
    
    })
    
})
.catch((error) => {
    console.log(error)
})



