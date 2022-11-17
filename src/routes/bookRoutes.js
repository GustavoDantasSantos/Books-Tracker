const Express = require('express');

const bookRoutes = Express.Router();

const CreateBookController = require('../controllers/bookControllers/CreateBookController');

bookRoutes.post('/', CreateBookController.execute);

module.exports = bookRoutes;
