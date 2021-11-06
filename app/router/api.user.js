const { Router } = require('express');

const UserController = require('../controller/user.controller');

const route = Router();

route.post('/create', UserController.SignUp);

module.exports = route;