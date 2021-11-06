const { Router } = require('express');

const routeUser = require('./api.user');

const route = Router();

route.use('/user', routeUser);

module.exports = route;