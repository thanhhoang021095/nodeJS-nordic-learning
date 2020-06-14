const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
/* GET users listing. */
router.get('/', userController.getUsers);
router.get('/search', userController.searchUser);
router.get('/:id', userController.viewDetail)

module.exports = router;
