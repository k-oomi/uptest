var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require('multer');
var upload = multer({dest:'public/csv/'});


var session = require('express-session');
var commonRouter = require('./routes/common');
var usersRouter = require('./routes/users');
var personalRouter = require('./routes/personal');
var loginlRouter = require('./routes/login');
var newAccountRouter = require('./routes/newAccount');
var uploadRouter = require('./routes/upload');
var fs = require('fs');
var csv = require('csv');

let ses_opt = {
  secret: 'my secret',
  resave: false,
  saveUnimitialized: false,
  cookie: { maxAge: 60 * 60 * 1000}
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(ses_opt));



app.use('/', commonRouter);//http://localhost:3000
app.use('/users', usersRouter);
app.use('/personal', personalRouter);
app.use('/login', loginlRouter);
app.use('/newAccount', newAccountRouter);
app.use('/u', uploadRouter);
app.use('/upload', uploadRouter);
// app.use('/upload', uploadRouter);//http://localhost:3000/uploadにアクセス
//アクセスしたらupload.jsに書いた処理する
// app.use('/u', uploadRouter);だったらhttp://localhost:3000/uにアクセス
//アクセスしたらupload.jsに書いた処理する



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
