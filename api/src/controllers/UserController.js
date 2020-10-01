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

    }

};