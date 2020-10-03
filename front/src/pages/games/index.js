import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import Header from '../../components/header/Header.js';
import Card from '../../components/cards/Cards.js';
import AddGame from '../../components/addGame/AddGame.js';

import Img1 from '../../images/6.jpg'

import './games.css';

//// pagina responsavel por exibir os jogos do usuario
//// como nas outras paginas se trata de uma chamada a api
//// que em caso de erro emite um alerta
//// e se ocorrer tudo corretamente armazena o JSON da api dentro
//// da variavel de estado em questão
//// após isso é feito apenas um mapeamento e apresentação dos dados

const Games = () => {

    const [matches,
        setMatches] = useState([]);

    useEffect(() => {
        const fetchMatches = async() => {
            await api
                .get(`/matches/` + sessionStorage.getItem('user_id'))
                .then((response) => setMatches(response.data.matches))
                .catch((response) => alert(response.response.request.response));
        };

        fetchMatches();
    }, []);

    return (
        <div className='games'>
            <Header/>
            <div className='table-box'>
                <div
                    style={{
                    width: '42%%',
                    height: '90%',
                    overflow: 'auto'
                }}>
                    <table id='customers'>
                        <tbody>
                            <tr>
                                <th>Match</th>
                                <th>Adversary</th>
                                <th>Points</th>
                            </tr>
                            {matches.length > 0
                                ? (matches.map((match, i) => (
                                    <tr key={i}>
                                        <td>{matches.length-i}</td>
                                        <td>{[match.adversary.name]}</td>
                                        <td>{match.points}</td>
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
                <Card body={<AddGame/>} image={Img1}></Card>
            </div>
        </div>
    )
}

export default Games;
