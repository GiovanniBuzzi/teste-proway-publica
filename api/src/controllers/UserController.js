const { response } = require('express');
const User = require('../models/User');
const Team = require('../models/Team');
const { Op } = require("sequelize");

module.exports = {

    async index(req,res){
        const users = await User.findAll();
        if(!users){
            return res.status(400).json({ error: 'Dont Exist Users'});
        }
        return res.json({users});
    },
    
    async store(req,res){
        const {name,login,password,team} = req.body;

        if(name==null || login==null || password==null || team==null){
            return res.status(400).json({ error: 'Store Error'})
        }

        const users = await User.findOne({where:{login:login}});

        if(users != null){
            return res.status(400).json({ error: 'This Login Exist'})
        }

        const teams = await Team.findOne({where:{name:team}});

        if(!teams){
            return res.status(400).json({ error: 'This team dont exist'})
        }

        const user = await User.create({name,login,password,id_team:teams.id});

        return res.json({message: 'Success', user});

    },

    async login(req,res){
        const {login, password} = req.body;

        if(login == null || password == null){
            return res.status(400).json({ error: 'Login/Password Null ???'});
        }

        const user = await User.findOne({where:{login:login}});

        if(!user){
            return res.status(400).json({ error: 'Invalid Login'});
        }

        if(user.password == password){
            return res.json({auth:true, user_id:user.id, user_name:user.name});
        }

        return res.status(400).json({ error: 'Invalid Password'});

    },

    async record(req,res){

        const user_max = await User.findOne({where:{id:req.params.id_user},
            attributes:['max_season','max_record'],
            include: {association:'matches', include:{association:'adversary', attributes:['name']}, limit: 5, order:[['points','DESC']], attributes:['points']}});

        const user_min = await User.findOne({where:{id:req.params.id_user},
            attributes:['min_season','min_record'],
            include: {association:'matches', include:{association:'adversary', attributes:['name']}, limit: 5, order:[['points','ASC']], attributes:['points']}});

        if(!user_max || !user_min){
            return res.status(400).json({ error: 'This user dont exist'});
        }
        return res.json({user_max,user_min});
    },

    async records(req,res){

        const max_season = await User.findAll({where: {max_season:{[Op.not]:null}}, limit:5, order:[['max_season', 'DESC']],
        attributes: ['name'], include: [{association:'team', attributes:['name']}, 
        {association:'matches', attributes:['points','id_adversary'], limit: 1, order:[['points','DESC']], include:{association: 'adversary', attributes:['name']}}]});

        const min_season = await User.findAll({where: {min_season:{[Op.not]:null}}, limit:5, order:[['min_season', 'ASC']],
        attributes: ['name'], include: [{association:'team', attributes:['name']}, 
        {association:'matches', attributes:['points','id_adversary'], limit: 1, order:[['points','ASC']],include:{association: 'adversary', attributes:['name']}}]});

        if(!max_season || !min_season){
            return res.status(400).json({ error: 'Users not found'});
        }
        return res.json({max_season, min_season});
    },

};