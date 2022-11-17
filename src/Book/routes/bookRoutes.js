const Express = require('express');

const bookRoutes = Express.Router();

const CreateBookController = require('../controllers/CreateBookController');
const ListBooksController = require('../controllers/ListBooksController');

bookRoutes.get('/', ListBooksController.execute);
bookRoutes.post('/', CreateBookController.execute);

module.exports = bookRoutes;
