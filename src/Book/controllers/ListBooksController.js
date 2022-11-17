const ListBooksService = require('../services/ListBooksService');

module.exports = class CreateBookController{
    static async execute(req, res){
        const list = await ListBooksService.execute();
        res.status(200).send(list);
    }
};
