const Team = require('../models/Team');

module.exports = {

    /// metodo responsavel por ceder as informações dos times cadastrados
    async index(req,res){
        const teams = await Team.findAll({attributes:['name'],
            include:{association:'players', attributes:['name']}});
        if(!teams){
            return res.status(400).json({ error: 'Dont Exist Teams'});
        }
        return res.json({teams});
    },

    /// metodo responsvel por efetuar o registro de times
    async store(req,res){

        //// na validação do token de usuario é colocada uma condição SU (super usuario)
        //// true or false pois apenas o SU pode cadastrar times
        if(!req.params.su){
            return res.status(400).json({error: 'Only admin can resgiter a team'});
        }

        //// validação da requisição
        const {team} = req.body;
        if(team==null){
            return res.status(400).json({ error: 'Store Error'})
        }

        //// validação se o time ja existe
        const teams = await Team.findOne({where:{name:team}});
        if(teams != null){
            return res.status(400).json({ error: 'This Team Exist'})
        }

        const teamm = await Team.create({name:req.body.team});

        return res.json({message: 'Success', teamm});

    },

}