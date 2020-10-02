const { response } = require('express');
const Match = require('../models/Match');
const User = require('../models/User');

module.exports = {

    async index(req,res){
        const matches = await Match.findAll({order: [ [ 'id', 'DESC' ]],
            where:{id_user:req.params.id_user}});
        if(!matches){
            return res.status(400).json({ error: 'Dont exist Matches'});
        }
        return res.json({matches});
    },

    async store(req,res){
        const {points, adversary} = req.body;

        if(points==null || adversary==null){
            return res.status(400).json({ error: 'Store Error'})
        }

        const user = await User.findByPk(req.params.id_user);

        if(!user){
            return res.status(400).json({ error: 'Store Error'})
        }

        const match = await Match.create({points,adversary, id_user:req.params.id_user});

        if(user.max_season <= points){
            user.max_season = points;
            user.max_record += 1;
        }

        if(user.min_season >= points){
            user.min_season = points;
            user.min_record += 1;
        }

        user.save();

        return res.json({message: 'Success', match});

    }

};