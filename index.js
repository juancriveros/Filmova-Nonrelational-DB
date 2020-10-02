require('dotenv').config();
const path = require('path')

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const movieRouterApi = require('./routes/api/movie')

const connectDB = require('./middlewares/db')
connectDB();

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/api/movie', movieRouterApi)


app.use((req, res, next) => {
    const error = new Error('Not Found !');
    error.status = 400;
    next(error);
})

app.listen(process.env.PORT, function () {
    console.log("Express started: Port " + process.env.PORT);
})
