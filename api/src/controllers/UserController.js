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
            return res.json({auth:true, user_id:user.id});
        }

        return res.status(400).json({ error: 'Invalid Password'});

    }

};