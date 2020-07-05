const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');

const indexRouter = require('../routes/index.router');
const usersRouter = require('../routes/user.router');
const loginRouter = require('../routes/login.router');
const productRouter = require('../routes/product.router');

// api router
const productApiRouter = require('../api/routes/product.route');
const userApiRouter = require('../api/routes/user.route');
const categoryApiRouter = require('../api/routes/category.route');

module.exports = (app) => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    // router
    app.use('/', indexRouter);
    app.use('/login', loginRouter);
    app.use('/user', usersRouter);
    app.use('/product', productRouter);

    // api
    app.use('/api/product', productApiRouter);
    app.use('/api/user', userApiRouter);
    app.use('/api/category', categoryApiRouter);

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
}
