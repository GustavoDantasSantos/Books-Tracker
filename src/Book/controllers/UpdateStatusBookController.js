const UpdateStatusBookService = require('../services/UpdateStatusBookService');

module.exports = class UpdateStatusBookController{
    static async execute(req, res){
        const { id } = req.params;
        const body = req.body;
        await UpdateStatusBookService.execute(id, body);
        res.status(200).send({message: 'Item atualizado com sucesso'});
    }
};
