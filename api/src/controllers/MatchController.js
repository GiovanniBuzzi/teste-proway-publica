const Match = require('../models/Match');
const User = require('../models/User');
const Team = require('../models/Team');

module.exports = {

    //// Metodo responsavel por ceder as informações de jogos do usuario pelo 
    //// Na maioria dos métodos controllers tem uma peneira dos atributos de cada tabela
    //// para não ficar carregando dados a toa                                                
    async index(req,res){
        const matches = await Match.findAll({order: [ [ 'id', 'DESC' ]],
            where:{id_user:req.params.id_user}, attributes:['points'],
            include:{association:'adversary', attributes:['name']}});
        if(!matches){
            return res.status(400).json({ error: 'Dont exist Matches'});
        }
        return res.json({matches});
    },

    //// Metodo responsavel por cadastrar novos jogos do usuario pelo id
    //// E por controlar os recordes dos usuários
    async store(req,res){
        const {points, adversary} = req.body;

        ///validação da requisição
        if(points==null || adversary==null){
            return res.status(400).json({ error: 'Store Error'})
        }

        /// validação dos pontos
        if(points >= 1000 || points < 0){
            return res.status(400).json({ error: 'Wrong points'});
        }

        //// validação se o id do usuario realmente existe
        const user = await User.findByPk(req.params.id_user);
        if(!user){
            return res.status(400).json({ error: 'Store Error'})
        }

        //// validação se o time adversario informado pelo usuário existe
        const teams = await Team.findOne({ where:{name:req.body.adversary}});
        if(!teams){
            return res.status(400).json({ error: 'This team dont exist'});
        }

        //// validação se o time do usuário é o mesmo que ele ta cadastrando
        //// para jogar contra ex: bulls vs bulls
        if(user.id_team == teams.id){
            return res.status(400).json({ error: 'Match Error'});
        }

        //// cadastro dos recordes do usuário, validações dos pontos a cada jogo
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