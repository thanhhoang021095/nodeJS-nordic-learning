const express = require('express');
const router = express.Router();
const loginController = require("../controllers/login.controller");

/* GET home page. */
router.get('/', loginController.getLoginForm);

module.exports = router;
