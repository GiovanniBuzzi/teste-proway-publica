import React, { useState} from 'react'

import api from '../../services/api'

import './addGame.css'

////// componente para adicionar jogos
////// criei um componente para inseri-lo dentro de um card

const AddGame = () => {

    const [points,setPoints] = useState(null);
    const [adversary,setAdversary] = useState('');
    const [inside, setInside] = useState(false);

    //// funcão responsavel pela chamada da api
    //// em caso de erro exibe a mensagem no alerta
    function newGame(){
        api.post('/matches/'+sessionStorage.getItem('user_id'),{points,adversary})
        .then((response) => alert(response.data.message))
        .catch((response) => alert(response.response.request.response));
        
    }

    //// funcoes para fazer um hover dentro do js
    function mouseIn(){
        setInside(true);
    }
    function mouseOut(){
        setInside(false);
    }
    /////////////////
    //// formulario para inserção de jogos novos
    //// todos os dados informados são controlados pelas váriaveis de estados
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
