const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes')
const app = express();
const PORT = 8000

// middleware
app.use(morgan('dev'))
app.use(express.json());
app.use(cors())

// routes
app.get('/', (req, res) => res.send({status: 'live'}))

app.use('/student', routes)

mongoose.connect('mongodb://localhost:27017/mern-crud', {})
    .then(()=> console.log('DB is connected'))
    .catch(err=> {
    throw new Error(err)
    })

app.listen(PORT, ()=> {
    console.log(`@=> Server is running at http://localhost:${PORT}`)
})