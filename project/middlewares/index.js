const middleware = exports = module.exports = {}

const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const loginRouter = require('../routes/login');

middleware.register = (app) => {
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/login', loginRouter);
}
