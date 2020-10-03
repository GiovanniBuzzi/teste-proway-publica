import React, {useState} from 'react';

import api from '../../services/api';

import './signUp.css';

function SignUp() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [team, setTeam] = useState('');
    const [login, setLogin] = useState('');

    function handleSignUp(){

        console.log(name);
        console.log(password);
        console.log(team);
        console.log(login);

        api.post('/users',{login,password,name,team})
        .then((response) => redir())
        .catch((response) => alert(response.response.request.response));      

    }

    function redir(){
        window.location.replace('/');
    }

    return (
        <div className='signUp'>
            <div className='form'>
                <h1>Sign Up</h1>
                <form className='form2'onSubmit={(event) => {event.preventDefault()}}>
                    <input placeholder='Username' type="text" onChange={e => setLogin(e.target.value)}/>
                    <p></p>
                    <input placeholder='Password' type="password" onChange={e => setPassword(e.target.value)}/>
                    <p></p>
                    <input placeholder='Team' type="text"  onChange={e => setTeam(e.target.value)}/>
                    <p></p>
                    <input placeholder='Name' type="text" onChange={e => setName(e.target.value)}/>
                    <p></p>
                    <div className='botao'>
                        <button onClick={handleSignUp}><h1>Register</h1></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
