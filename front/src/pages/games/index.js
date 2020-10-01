import React, {useState, useEffect} from 'react'

import api from '../../services/api'

const Games = () => {

    const [matches,
        setMatches] = useState([]);

    useEffect(() => {
        const fetchMatches = async() => {
            const result = await api
                .get(`/matches/`+sessionStorage.getItem('user_id'))
                .then((response) => setMatches(response.data.matches));
        };

        fetchMatches();
    }, []);

    return (

        <div>
            <table>
                <tbody>
                    {matches.length > 0 ? (
                    matches.map((match) => (
                        <tr key={match.id}>
                            <td></td>
                            <td>{match.adversary}</td>
                            <td>{match.points}</td>
                        </tr>
                    ))
                    ): (
                        <tr>
                            <td colSpan={3}>No Matches</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Games;
