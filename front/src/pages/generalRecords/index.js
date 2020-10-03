import React, {useState, useEffect, Fragment} from 'react';

import api from '../../services/api';

import Header from '../../components/header/Header';

import './generalRecords.css';

////// pagina para apresentar os recordes globais (melhores entre os usuarios)
///// como ja dito é um acesso a api onde se tudo ocorre corretamente
//// os dados são colocados nas variaveis de estado
//// as mesmas sao mapeadas e colocadas a disposição dos usuarios

const GeneralRecords = () => {

    const [usersMax,
        setUsersMax] = useState({});
    const [usersMin,
        setUsersMin] = useState([]);

    useEffect(() => {
        const fetchRecords = async() => {
            await api
                .get(`/users/records/`)
                .then((response) => setValues(response.data))
                .catch((response) => alert(response.response.request.response));

        };

        fetchRecords();
    }, []);

    function setValues(response) {
        setUsersMax(response.max_season);
        setUsersMin(response.min_season);
    }

    return (
        <div className='generalRecords'>
            <Header/>
            <div className="tablesBox">
                <div className='tableMax'>
                    <table id='customers'>
                        <tbody>
                            <tr>
                                <th
                                    style={{
                                    textAlign: 'center'
                                }}
                                    colSpan={4}>Most Points Match (One per Player)</th>
                            </tr>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Adversary</th>
                                <th>Points</th>
                            </tr>
                            {usersMax.length > 0
                                ? (usersMax.map((user, i) => (
                                    <tr key={user.id}>
                                        <td>{i + 1}</td>
                                        <td>{user.name}</td>
                                        {user.matches.length >= i - 1
                                            ? (user.matches.map((match, u) => (
                                                <Fragment key={u}>
                                                    <td>{[match.adversary.name]}</td>
                                                    <td>{match.points}</td>
                                                </Fragment>
                                            )))
                                            : <td
                                                style={{
                                                textAlign: 'center'
                                            }}
                                                colSpan={2}>
                                                No Matches</td>}
                                    </tr>
                                )))
                                : (
                                    <tr>
                                        <td
                                            style={{
                                            textAlign: 'center'
                                        }}
                                            colSpan={2}>No Players</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
                <div className='padding'></div>
                <div className='tableMin'>
                    <table id='customers'>
                        <tbody>
                            <tr>
                                <th
                                    style={{
                                    textAlign: 'center'
                                }}
                                    colSpan={4}>Less Points Match (One per Player)</th>
                            </tr>
                            <tr>
                                <th>Rank</th>
                                <th>Player</th>
                                <th>Adversary</th>
                                <th>Points</th>
                            </tr>
                            {usersMin.length > 0
                                ? (usersMin.map((user, i) => (
                                    <tr key={user.id}>
                                        <td>{i + 1}</td>
                                        <td>{user.name}</td>
                                        {user.matches.length >= i - 1
                                            ? (user.matches.map((match, u) => (
                                                <Fragment key={u}>
                                                    <td>{[match.adversary.name]}</td>
                                                    <td>{match.points}</td>
                                                </Fragment>
                                            )))
                                            : <td
                                                style={{
                                                textAlign: 'center'
                                            }}
                                                colSpan={2}>
                                                No Matches</td>}
                                    </tr>
                                )))
                                : (
                                    <tr>
                                        <td
                                            style={{
                                            textAlign: 'center'
                                        }}
                                            colSpan={2}>No Players</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default GeneralRecords;
