const Express = require('express');

const bookRoutes = Express.Router();

const CreateBookController = require('../controllers/CreateBookController');
const ListBooksController = require('../Book/controllers/bookControllers/ListBooksController');

bookRoutes.get('/', ListBooksController.execute);
bookRoutes.post('/', CreateBookController.execute);

module.exports = bookRoutes;
