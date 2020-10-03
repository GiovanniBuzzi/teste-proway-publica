import React, {useState, useEffect} from 'react';

import api from '../../services/api';

import Header from '../../components/header/Header';
import Card from '../../components/cards/Cards';

import Img1 from '../../images/1.jpg'
import Img2 from '../../images/2.jpg'
import Img3 from '../../images/3.jpeg'
import Img4 from '../../images/4.jpg'


import './records.css';

const Records = () => {

    const [maxUserRecord,
        setMaxUserRecord] = useState([]);
    const [maxMatches,
        setMaxMatches] = useState([]);
    const [minUserRecord,
        setMinUserRecord] = useState([]);
    const [minMatches,
        setMinMatches] = useState([]);

    useEffect(() => {
        const fetchRecords = async() => {
            await api
                .get(`/users/records/` + sessionStorage.getItem('user_id'))
                .then((response) => setValues(response))
                .catch((response) => alert(response.response.request.response));
        };

        fetchRecords();
    }, []);

    function setValues(response) {
        setMaxUserRecord(response.data.user_max);
        setMaxMatches(response.data.user_max.matches);
        setMinUserRecord(response.data.user_min);
        setMinMatches(response.data.user_min.matches);
    }

    return (

        <div className='records'>
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
                                    colSpan={3}>Best Matches</th>
                            </tr>
                            <tr>
                                <th>Rank</th>
                                <th>Adversary</th>
                                <th>Points</th>
                            </tr>
                            {maxMatches.length > 0
                                ? (maxMatches.map((match, i) => (
                                    <tr key={i}>
                                        <td>{i+1}</td>
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
                <div className='tableMin'>
                    <table id='customers'>
                        <tbody>
                            <tr>
                                <th
                                    style={{
                                    textAlign: 'center'
                                }}
                                    colSpan={3}>Worst Matches</th>
                            </tr>
                            <tr>
                                <th>Rank</th>
                                <th>Adversary</th>
                                <th>Points</th>
                            </tr>
                            {minMatches.length > 0
                                ? (minMatches.map((match, u) => (
                                    <tr key={u}>
                                        <td>{u+1}</td>
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
                <div className='recordsCards'>
                    <div>
                    <Card body={<div style={{textAlign:'center'}}><h1>Max Season</h1><p></p>{maxUserRecord.max_season}</div>}
                            image={Img1}></Card>
                    <Card body={<div style={{textAlign:'center'}}><h1>Max Records</h1><p></p>{maxUserRecord.max_record}</div>}
                            image={Img2}></Card>
                    </div><div>
                    <Card body={<div style={{textAlign:'center'}}><h1>Min Season</h1><p></p>{minUserRecord.min_season}</div>}
                            image={Img3}></Card>
                    <Card body={<div style={{textAlign:'center'}}><h1>Min Records</h1><p></p>{minUserRecord.min_record}</div>}
                            image={Img4}></Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Records;
