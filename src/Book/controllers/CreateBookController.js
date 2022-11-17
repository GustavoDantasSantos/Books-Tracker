const CreateBookService = require('../services/CreateBookService');

module.exports = class CreateBookController{
    static async execute(req, res){
        const data = {
            title: req.body.title,
            autor: req.body.autor
        };

        const book = await CreateBookService.execute(data);
        
        res.status(200).send(book)
    };
};
