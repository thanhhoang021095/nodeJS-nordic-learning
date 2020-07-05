const User = require('../../models/user.model')

module.exports.getUsers = (req, res) => {
    User.find().then(data => {
        res.json(data);
    })
}