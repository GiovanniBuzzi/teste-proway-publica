const Match = require('../models/Match');
const User = require('../models/User');
const Team = require('../models/Team');

module.exports = {
                                                
    async index(req,res){

        await Team.create({name:'BULLS'});
        await Team.create({name:'LAKERS'});
        await Team.create({name:'NETS'});
        await Team.create({name:'HEAT'});
        await Team.create({name:'BUCKS'});
        
        await User.create({name:'Maria', login:'maria', password:'maria', id_team:1, max_season:100, min_season:15, max_record:1, min_record: 3});
        await User.create({name:'Fabio', login:'fabio', password:'fabio', id_team:2, max_season:100, min_season:15, max_record:1, min_record: 3});
        await User.create({name:'Jordan', login:'jordan', password:'jordan', id_team:3, max_season:100, min_season:15, max_record:1, min_record: 3});
        await User.create({name:'Rose', login:'rose', password:'rose', id_team:4, max_season:100, min_season:15, max_record:1, min_record: 3});
        await User.create({name:'Harden', login:'harden', password:'harden', id_team:5, max_season:100, min_season:15, max_record:1, min_record: 3});

        await Match.create({points:100, id_adversary:2, id_user:1});
        await Match.create({points:20, id_adversary:3, id_user:1});
        await Match.create({points:40, id_adversary:4, id_user:1});
        await Match.create({points:15, id_adversary:5, id_user:1});

        await Match.create({points:100, id_adversary:3, id_user:2});
        await Match.create({points:20, id_adversary:4, id_user:2});
        await Match.create({points:40, id_adversary:5, id_user:2});
        await Match.create({points:15, id_adversary:1, id_user:2});

        await Match.create({points:100, id_adversary:4, id_user:3});
        await Match.create({points:20, id_adversary:5, id_user:3});
        await Match.create({points:40, id_adversary:1, id_user:3});
        await Match.create({points:15, id_adversary:2, id_user:3});

        await Match.create({points:100, id_adversary:5, id_user:4});
        await Match.create({points:20, id_adversary:1, id_user:4});
        await Match.create({points:40, id_adversary:2, id_user:4});
        await Match.create({points:15, id_adversary:3, id_user:4});

        await Match.create({points:100, id_adversary:1, id_user:5});
        await Match.create({points:20, id_adversary:2, id_user:5});
        await Match.create({points:40, id_adversary:3, id_user:5});
        await Match.create({points:15, id_adversary:4, id_user:5});
        
        return res.json({message:'SUCCESS'});
    },
}