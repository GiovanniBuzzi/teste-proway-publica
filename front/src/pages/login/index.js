import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';

import api from '../../services/api'

function Login(props) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        const log = api.post('/users/login',{login:user, password:password})
        .then((response) => doRedirect(response))
        .catch(localStorage.setItem('Login',false));

        
    }

    function doRedirect(response){
        if(response.data.auth === true){
            localStorage.setItem('Login',response.data.auth);
            window.location.replace('/app');
        }
    }

    return (
        <div>
            <form onSubmit={(event) => {event.preventDefault()}}>
                <label>Login</label>
                <input type="text" value={user} onChange={e => setUser(e.target.value)}/>
                <label>Password</label>
                <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login;
