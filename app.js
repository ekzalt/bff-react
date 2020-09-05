const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const HttpStatus = require('http-status-codes');
const cors = require('cors');

const { homeRouter } = require('./controllers');
const ioc = require('./ioc');

const { goodsRouter, productsRouter } = ioc();
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// custom routes
app.use('/', homeRouter);
app.use('/goods', goodsRouter);
app.use('/products', productsRouter);

// 404
app.use('*', (req, res, next) => {
  res
    .status(HttpStatus.NOT_FOUND)
    .json({ error: HttpStatus.getStatusText(HttpStatus.NOT_FOUND) });
});
// 500
app.use((error, req, res, next) => {
  console.error('Caught error', error);
  res
    .status(error.code || HttpStatus.INTERNAL_SERVER_ERROR)
    .json({ error: error.message });
});

module.exports = app;
