const BookRepository = require('../repository/bookRepository');

module.exports = class ListBooksService {
  static async execute(){
    const repository = new BookRepository();
    const list = await repository.findAll();
    if(list == []){
        //error
    }
    return list;
  };
}
