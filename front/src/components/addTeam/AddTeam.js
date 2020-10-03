import React, { useState} from 'react'

import api from '../../services/api'

import './addTeam.css'

/////// mesma lógica do componente para adicionar jogo
////// com um pouco mais de tempo acredito poderia fazer um componente unico
////// para adicionar qualquer coisa nesse formato de formulario

const AddGame = () => {

    const [team,setTeam] = useState('');
    const [inside, setInside] = useState(false);

    function newTeam(){
        api.post('/teams/'+sessionStorage.getItem('user_id'),{team})
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
            <div className='addTeam'>
            <div className='form3' onMouseEnter={mouseIn} onMouseLeave={mouseOut}>
                <h1>New Team</h1>
                {inside ?
                <form>
                    <input placeholder="Team" type="text" onChange={e => setTeam(e.target.value)}/>
                    <p></p>
                    <div className='botao1'>
                        <button onClick={newTeam}><h1>Add</h1></button>
                    </div>
                </form>
                : <div></div>}
            </div>
        </div>
        </div>
    )
}

export default AddGame;
