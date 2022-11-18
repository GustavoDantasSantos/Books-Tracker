const Express = require('express');

const bookRoutes = Express.Router();

const CreateBookController = require('../controllers/CreateBookController');
const ListBooksController = require('../controllers/ListBooksController');
const DeleteBookController = require('../controllers/DeleteBookController');
const UpdateStatusBookController = require('../controllers/UpdateStatusBookController');

bookRoutes.get('/', ListBooksController.execute);
bookRoutes.post('/', CreateBookController.execute);
bookRoutes.put('/:id', UpdateStatusBookController.execute);
bookRoutes.delete('/:id', DeleteBookController.execute);

module.exports = bookRoutes;
