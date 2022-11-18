const BookRepository = require('../repository/bookRepository');

module.exports = class DeleteBookService {
  static async execute(id){
    const repository = new BookRepository();
    const book = await repository.delete(id);
    return book;
  };
}
