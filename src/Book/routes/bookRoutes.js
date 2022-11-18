const Express = require('express');

const bookRoutes = Express.Router();

const CreateBookController = require('../controllers/CreateBookController');
const ListBooksController = require('../controllers/ListBooksController');
const DeleteBookController = require('../controllers/DeleteBookController');

bookRoutes.get('/', ListBooksController.execute);
bookRoutes.post('/', CreateBookController.execute);
bookRoutes.delete('/:id', DeleteBookController.execute);

module.exports = bookRoutes;
