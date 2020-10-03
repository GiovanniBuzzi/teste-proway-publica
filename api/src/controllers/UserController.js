const { response } = require('express');
const User = require('../models/User');
const Team = require('../models/Team');

var jwt = require('jsonwebtoken');

const { Op } = require("sequelize");

module.exports = {

    //// Metodo responsavel por ceder informações dos usuarios
    async index(req,res){
        const users = await User.findAll();
        if(!users){
            return res.status(400).json({ error: 'Dont Exist Users'});
        }
        return res.json({users});
    },
    
    //// metodos responsavel por fazer o cadastro de usuarios
    async store(req,res){

        //// validação da requisição
        const {name,login,password,team} = req.body;
        if(name==null || login==null || password==null || team==null){
            return res.status(400).json({ error: 'Store Error'})
        }

        //// validação para logins iguais
        const users = await User.findOne({where:{login:login}});
        if(users != null){
            return res.status(400).json({ error: 'This Login Exist'})
        }

        //// validação do time que o usuário informou (existecia do mesmo)
        const teams = await Team.findOne({where:{name:team}});
        if(!teams){
            return res.status(400).json({ error: 'This team dont exist'})
        }

        const user = await User.create({name,login,password,id_team:teams.id});

        return res.json({message: 'Success', user});

    },

    //// metodo responsavel por controlar o login do usuario
    async login(req,res){

        //// validação da requisição
        const {login, password} = req.body;
        if(login == null || password == null){
            return res.status(400).json({ error: 'Login/Password Null ???'});
        }

        //// validação se o login existe
        const user = await User.findOne({where:{login:login}});
        if(!user){
            return res.status(400).json({ error: 'Invalid Login'});
        }

        //// validação da senha
        //// se a senha estiver certa ele cria um token para 1200 segundos
        if(user.password == password){
            const id = user.id;
            var token = jwt.sign({id}, 'tokenteste', {
                expiresIn: 1200
            });
            var su = false;
            //// se for o super usuario ele seta su para true
            //// (problemas ao utilizar o arquivo .env com os segredos)
            //// deixei numérico mesmo
            if(user.id==1)
                su=true;
            
            return res.json({auth:true, token: token, user_id:user.id, user_name:user.name, su:su});
        }

        return res.status(400).json({ error: 'Invalid Password'});

    },

    //// metodo responsavel por ceder os recordes do usuário
    //// ele funciona procurando o ID dele e incluindo os dados necessários
    //// lembrando que a tabela de jogos é uma foreign key dentro do usuario
    //// então para acessar os dados da mesma existe uma lógica maior por tras
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

    //// metodo responsavel por encontrar os 5 melhores recordes entre todos os usuarios
    //// não tive muito tempo para desenvolver a lógica, então é apenas um recorde por usuario
    //// mesmo que ele tenha as 5 melhores pontuações ou piores
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