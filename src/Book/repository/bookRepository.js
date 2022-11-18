const { findByIdAndUpdate, findOneAndUpdate, updateOne } = require('../models/books');
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

  async delete(_id) {
    return await Book.findByIdAndDelete(_id);
  }

  async update(id, body){
    console.log(id, body);
    await Book.findByIdAndUpdate(id, body);
  }
}
