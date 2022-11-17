const Express = require('express');
const bookRoutes = require('../src/routes/bookRoutes');

const appRoutes = Express.Router();

appRoutes.use('book', bookRoutes)

module.exports = appRoutes;