var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { MongoClient } = require("mongodb");

//Only load .env in development
//Load heroku config otherwise
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiv1Router = require('./routes/api_v1');
var apiv2Router = require('./routes/api_v2');
var apiv3Router = require('./routes/api_v3');

var app = express();

//Connect to MongoDB
MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
.then(client =>{
  const db = client.db("projects_v1");
  app.locals.db = db;
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//Prettify JSON
app.set('json spaces', 2)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v1', apiv1Router);
app.use('/api/v2', apiv2Router);
app.use('/api/v3', apiv3Router);

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
