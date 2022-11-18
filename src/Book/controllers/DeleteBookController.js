const DeleteBookService = require('../services/DeleteBookService');

module.exports = class CreateBookController{
    static async execute(req, res){
        const { id } = req.params;   
        await DeleteBookService.execute(id);
        res.status(200).send({message: 'Item deletado'})
    };
};
