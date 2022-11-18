const BookRepository = require('../repository/bookRepository');

module.exports = class UpdateStatusBookService {
  static async execute(id, body){
    const repository = new BookRepository();
    await repository.update(id, body);
  };
}
