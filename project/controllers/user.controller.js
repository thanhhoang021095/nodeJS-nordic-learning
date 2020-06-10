const data = require('../data/user.json');

module.exports.getUsers =  function(req, res, next) {
    res.render('user', {
        users: data.body
    })
}