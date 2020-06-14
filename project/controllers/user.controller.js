const data = require('../data/user.json');

module.exports.getUsers =  function(req, res, next) {
    res.render('user/index', {
        users: data.body
    })
}

module.exports.searchUser = (req, res) => {
    const searchText = req.query.name;
    const users = data.body;
    const user = users.filter(item => {
        return item.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1; 
    })
    res.render('user/search-user', {
        users: user
    })
}

module.exports.viewDetail = (req, res) => {
    const id = req.params.id;
    const users = data.body;
    const user = users.filter(item => {
        return item._id == id;
    });
    res.render("user/view-user", {
        users: user,
    });
}