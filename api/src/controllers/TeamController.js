const { response } = require('express');
const Team = require('../models/Team');
const { store } = require('./MatchController');

module.exports = {

    async index(req,res){
        const teams = await Team.findAll({attributes:['name'],
            include:{association:'players', attributes:['name']}});
        if(!teams){
            return res.status(400).json({ error: 'Dont Exist Teams'});
        }
        return res.json({teams});
    },

    async store(req,res){

        if(!req.params.su){
            return res.status(400).json({error: 'Only admin can resgiter a team'});
        }

        const {team} = req.body;

        if(team==null){
            return res.status(400).json({ error: 'Store Error'})
        }

        const teams = await Team.findOne({where:{name:team}});

        if(teams != null){
            return res.status(400).json({ error: 'This Team Exist'})
        }

        const teamm = await Team.create({name:req.body.team});

        return res.json({message: 'Success', teamm});

    },

}