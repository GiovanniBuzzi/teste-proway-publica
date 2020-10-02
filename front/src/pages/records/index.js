import React, {useState, useEffect} from 'react'

import api from '../../services/api'

import Header from '../../components/header/Header'
import Card from '../../components/cards/Cards'

import './records.css'

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
                .then((response) => setValues(response));

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
                    <Card body={<div style={{textAlign:'center'}}>Max Season<p></p>{maxUserRecord.max_season}</div>}
                            image='https://lh3.googleusercontent.com/proxy/jbhZCIWuPZOT3TTIpG9gbcD6J6yNmmP8PBjnKQz_NVmA0xBXl5aCunx-BaDf5hHQDlABwbhN1UNKzsMn3UXXI2w0krPSoKxyh-ahI4sofIKgp-QXQ_G7BoWUM-PIpYbsvm4BwM3k0YhhpZhiSLubDL2WqDb57pzZjlKy_NlMUwRB7KN55Uc_ty0dWw0BivphyNvhk1qVHn-ikQ'></Card>
                    <Card body={<div style={{textAlign:'center'}}>Max Records<p></p>{maxUserRecord.max_record}</div>}
                            image='https://fsb.zobj.net/crop.php?r=gq2OWvmwPLweGPVDxyd6q33Q9ywuBIap0k5TTAGFDhuroc1FT-y-9f1RZrnFb1wrlaa3hP8iPHVISRg-dqfMArDwv_yNlcrjsoS3kQkQVIJJLDA8hFs2NbtHPBiJnF3xJMF8y9Qzgg5EJwPG'></Card>
                    </div><div>
                    <Card body={<div style={{textAlign:'center'}}>Min Season<p></p>{minUserRecord.min_season}</div>}
                            image='https://c0.wallpaperflare.com/preview/643/322/447/people-playing-basketball-during-golden-hour.jpg'></Card>
                    <Card body={<div style={{textAlign:'center'}}>Min Records<p></p>{minUserRecord.min_record}</div>}
                            image='https://image.winudf.com/v2/image/Y29tLnNnbS5mcmVlYmFza2V0YmFsbHdhbGxwYXBlcnNfc2NyZWVuc2hvdHNfMTFfYjk1YjYzZmU/screen-11.jpg?fakeurl=1&type=.jpg'></Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Records;
