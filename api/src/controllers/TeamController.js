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
        const {name} = req.body;

        if(name==null){
            return res.status(400).json({ error: 'Store Error'})
        }

        const teams = await Team.findOne({where:{name:name}});

        if(teams != null){
            return res.status(400).json({ error: 'This Team Exist'})
        }

        const team = await Team.create({name});

        return res.json({message: 'Success', team});

    },

}