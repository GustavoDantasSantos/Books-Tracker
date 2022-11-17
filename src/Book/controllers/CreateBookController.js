const Book = require('../models/books');

module.exports = class CreateBookController{
    static async execute(req, res){
        
        const book = new Book({
            title: req.body.title,
            autor: req.body.autor,
            addOnList: new Date(),
        });

        book.save(book)
            .then(() => {
                res.status(201).send(book);
            }).catch((err) => {
                res.status(500).send({message: 'Not able create a book'});
            });
    }
};
