var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const expenseRouter = require('./routes/expense');

const mongoose = require("mongoose");
const url = "mongodb+srv://Gopinath0332:gopi0332*@cluster0.hsutt.mongodb.net/expense?retryWrites=true&w=majority";

var app = express();
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const dbConnection = mongoose.connection;

dbConnection.on("open", () => {
  console.log("Connected to MongoDb");
});

dbConnection.on('error', console.error.bind(console, 'connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/expense', expenseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
