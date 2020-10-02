import React, { useState} from 'react'

import api from '../../services/api'

import './addGame.css'

const AddGame = () => {

    const [points,setPoints] = useState(null);
    const [adversary,setAdversary] = useState('');

    function newGame(){
        api.post('/matches/'+sessionStorage.getItem('user_id'),{points,adversary})
        .then((response) => alert(response.data.message))
        .catch((response) => alert('bla'))
        
    }

    return (
        <div>
            <div className='addGame'>
            <div className='form3'>
                <h1>New Game</h1>
                <form>
                    <input placeholder="Adversary" type="text" onChange={e => setAdversary(e.target.value)}/>
                    <p></p>
                    <input placeholder="Points"  type='text' onChange={e => setPoints(e.target.value)}/>
                    <p></p>
                    <div className='botao1'>
                        <button onClick={newGame}><h1>Add</h1></button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    )
}

export default AddGame;
