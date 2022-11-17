const Book = require('../models/books');

module.exports = class BookRepository {

  async create(data) {
    const book = new Book({title: data.title, autor: data.autor})
    await book.save();
    return book
  }

  async findAll() {
    return await Book.find();
  }

  async findById(_id) {
    return await Book.findOne({_id})
  }
}