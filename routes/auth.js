const express = require('express');
const router = express.Router();

const createAccount = require('../controllers/create-account')
const login = require('../controllers/login')

router.route('/create-account').post(createAccount);
router.route('/login').post(login);

module.exports = router;