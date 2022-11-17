const BookRepository = require('../repository/bookRepository');

module.exports = class CreateBookService {
  static async execute(data){
    const repository = new BookRepository();
    const book = await repository.create(data);
    return book;
  };
}
