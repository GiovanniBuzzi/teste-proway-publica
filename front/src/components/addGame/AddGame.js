import React, { useState} from 'react'

import api from '../../services/api'

import './addGame.css'

const AddGame = () => {

    const [points,setPoints] = useState(null);
    const [adversary,setAdversary] = useState('');
    const [inside, setInside] = useState(false);

    function newGame(){
        api.post('/matches/'+sessionStorage.getItem('user_id'),{points,adversary})
        .then((response) => alert(response.data.message))
        .catch((response) => alert(response.response.request.response));
        
    }

    function mouseIn(){
        setInside(true);
    }
    function mouseOut(){
        setInside(false);
    }

    return (
        <div>
            <div className='addGame'>
            <div className='form3' onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
                <h1>New Game</h1>
                {inside ?
                <form>
                    <input placeholder="Adversary" type="text" onChange={e => setAdversary(e.target.value)}/>
                    <p></p>
                    <input placeholder="Points"  type='text' onChange={e => setPoints(e.target.value)}/>
                    <p></p>
                    <div className='botao1'>
                        <button onClick={newGame}><h1>Add</h1></button>
                    </div>
                </form>
                : <div></div>}
            </div>
        </div>
        </div>
    )
}

export default AddGame;
