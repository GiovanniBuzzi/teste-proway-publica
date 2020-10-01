const { response } = require('express');
const Match = require('../models/Match');

module.exports = {

    async index(req,res){
        const matches = await Match.findAll({
            where:{id_user:req.params.id_user}});
        if(!matches){
            return res.status(400).json({ error: 'Dont exist Matches'});
        }
        return res.json({matches});
    },

};