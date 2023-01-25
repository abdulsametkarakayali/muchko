const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000

const student = require('./routes/student');
const homework = require('./routes/homework');
const lesson = require('./routes/lesson');

const app = express();

// db connection
const db = require('./helper/db.js')();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
app.use('/api/student', student);
app.use('/api/lesson', lesson);
app.use('/api/homework', homework);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: { message: err.message, code: err.code } });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
module.exports = app;
