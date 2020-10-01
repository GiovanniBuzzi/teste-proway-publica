const { response } = require('express');
const User = require('../models/User');

module.exports = {

    async index(req,res){
        const users = await User.findAll();
        if(!users){
            return res.status(400).json({ error: 'Dont exist Users'});
        }
        return res.json({users});
    },

};