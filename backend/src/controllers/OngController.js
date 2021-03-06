const generateUniqueId = require('../../src/utils/generateUniqueid');
const connection = require('../database/connection');



module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
     
        return response.json(ongs)
    
    },
     
    async create(resquest, response){
        const { name, email, whatsapp, city, uf } = resquest.body;

        const id = generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        return response.json({ id });
        
    }
}