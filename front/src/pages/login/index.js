import React, {useState} from 'react'

import api from '../../services/api'

function Login() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        const log = api.post('/login',{login:user, password:password});
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
