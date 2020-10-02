const { response } = require('express');
const User = require('../models/User');

module.exports = {

    async index(req,res){
        const users = await User.findAll();
        if(!users){
            return res.status(400).json({ error: 'Dont Exist Users'});
        }
        return res.json({users});
    },
    
    async store(req,res){
        const {name,login,password} = req.body;

        if(name==null || login==null || password==null){
            return res.status(400).json({ error: 'Store Error'})
        }

        const users = await User.findOne({where:{login:login}});

        if(users != null){
            return res.status(400).json({ error: 'This Login Exist'})
        }

        const user = await User.create({name,login,password});

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
            include: {association:'matches', limit: 5, order:[['points','DESC']], attributes:['points','adversary']}});

        const user_min = await User.findOne({where:{id:req.params.id_user},
            attributes:['min_season','min_record'],
            include: {association:'matches', limit: 5, order:[['points','ASC']], attributes:['points','adversary']}});

        if(!user_max || !user_min){
            return res.status(400).json({ error: 'This user dont exist'});
        }
        return res.json({user_max,user_min});
    },

    async records(req,res){

        const max_season = await User.findAll({limit: 5, order: [[ 'max_season', 'DESC' ]],
        attributes: ['name'], 
        include: {association: 'matches', limit: 1, order:[['points', 'DESC']], attributes:['points','adversary']}});

        const min_season = await User.findAll({limit: 5, order: [[ 'min_season', 'DESC' ]],
        attributes: ['name'], 
        include: {association: 'matches', limit: 1, order:[['points', 'ASC']], attributes:['points','adversary']}});

        if(!max_season || !min_season){
            return res.status(400).json({ error: 'Users not found'});
        }
        return res.json({max_season,min_season});
    },

};