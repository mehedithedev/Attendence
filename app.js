const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log(`Connected to MongoDB database`)
})
.catch(err =>{
    console.log(`Error connecting to database ${err}`)
})


// View engines
app.set('view engine', 'ejs');
app.set('views', './views')

// Middlewares
app.use(express.static('public'))


// start the server
app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`)
})