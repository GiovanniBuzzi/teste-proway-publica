import React, {useState, useEffect, Fragment} from 'react';

import api from '../../services/api';

import Header from '../../components/header/Header';

import './generalRecords.css';

const GeneralRecords = () => {

    const [usersMax,
        setUsersMax] = useState({});
    const [usersMin,
        setUsersMin] = useState([]);

    useEffect(() => {
        const fetchRecords = async() => {
            await api
                .get(`/users/records/`)
                .then((response) => setValues(response.data));

        };

        fetchRecords();
    }, []);

    function setValues(response) {
        setUsersMax(response.max_season);
        setUsersMin(response.min_season);
    }

    return (
        <div className='generalRecords'>
            <Header/> {console.log(usersMax)}
            {console.log(usersMin)}
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
