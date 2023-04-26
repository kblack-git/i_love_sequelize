var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
// var logger = require('morgan');
var logger = morgan('tiny');
const helmet = require('helmet');
var indexRouter = require('./routes/index');
var orderRouter = require('./routes/order');
var productRouter = require('./routes/product')

var app = express();


// app.use(logger('dev'));
app.use(helmet())
app.use(logger)
app.get('/', (req, res) => {
    res.send('Hi');
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/order', orderRouter);
app.use('/product',productRouter);

module.exports = app;
