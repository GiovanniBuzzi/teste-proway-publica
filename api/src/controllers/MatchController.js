const { response } = require('express');
const Match = require('../models/Match');
const User = require('../models/User');
const Team = require('../models/Team');

module.exports = {

    async index(req,res){
        const matches = await Match.findAll({order: [ [ 'id', 'DESC' ]],
            where:{id_user:req.params.id_user}, attributes:['points'],
            include:{association:'adversary', attributes:['name']}});
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

        if(points >= 1000 || points < 0){
            return res.status(400).json({ error: 'Wrong points'});
        }

        const user = await User.findByPk(req.params.id_user);

        if(!user){
            return res.status(400).json({ error: 'Store Error'})
        }

        const teams = await Team.findOne({ where:{name:req.body.adversary}});

        if(!teams){
            return res.status(400).json({ error: 'This team dont exist'});
        }

        if(user.id_team == teams.id){
            return res.status(400).json({ error: 'Match Error'});
        }

        const match = await Match.create({points,id_adversary: teams.id, id_user:req.params.id_user});

        if(user.max_season <= points || user.max_season == null){
            user.max_season = points;
            user.max_record += 1;
        }

        if(user.min_season >= points || user.min_season == null){
            user.min_season = points;
            user.min_record += 1;
        }

        user.save();

        return res.json({message: 'Success', match});

    }

};