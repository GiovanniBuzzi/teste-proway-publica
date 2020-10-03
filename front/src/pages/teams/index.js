import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import Header from '../../components/header/Header';
import Card from '../../components/cards/Cards';
import AddTeam from '../../components/addTeam/AddTeam';

import Img1 from '../../images/6.jpg'

import './teams.css';

const Teams = () => {

    const [teams,
        setTeams] = useState([]);

    useEffect(() => {
        const fetchTeams = async() => {
            await api
                .get(`/teams/`)
                .then((response) => setTeams(response.data.teams))
                .catch((response) => alert(response.response.request.response));
        };

        fetchTeams();
    }, []);

    return (
        <div className='teams'>
            <Header/>
            <div className='table-box'>
                <div
                    style={{
                    width: '30%',
                    height: '90%',
                    overflow: 'auto'
                }}>
                    <table id='customers'>
                        <tbody>
                            <tr>
                                <th>Creation Order</th>
                                <th>Team</th>
                                <th>Registered Players</th>
                            </tr>
                            {teams.length > 0
                                ? (teams.map((team, i) => (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{[team.name]}</td>
                                        <td>{team.players.length}</td>
                                    </tr>
                                )))
                                : (
                                    <tr>
                                        <td colSpan={3}>No Matches</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
                <Card body={<AddTeam/>} image={Img1}></Card>
            </div>
        </div>
    )
}

export default Teams;
