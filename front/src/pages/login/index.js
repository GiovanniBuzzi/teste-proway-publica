import React, {useState} from 'react'

import api from '../../services/api'

function Login(props) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        const log = api.post('/users/login',{login:user, password:password})
        .then((response) => doRedirect(response))
        .catch(localStorage.setItem('login',false));    
    }

    function doRedirect(response){
        if(response.data.auth === true){
            localStorage.setItem('login',response.data.auth);
            sessionStorage.setItem('user_name',response.data.user_name);
            sessionStorage.setItem('user_id',response.data.user_id);
            window.location.replace('/main');
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
