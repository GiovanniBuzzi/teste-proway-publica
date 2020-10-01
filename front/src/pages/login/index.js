import React, {useState} from 'react'

import api from '../../services/api'

import './login.css'

function Login(props) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(props){
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
        <div className='login'>
            <div className='form'>
                <h1>Welcome</h1>
                <form className='form2'onSubmit={(event) => {event.preventDefault()}}>
                    <label>Login</label>
                    <input type="text" value={user} onChange={e => setUser(e.target.value)}/>
                    <p></p>
                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                    <p></p>
                    <div className='botao'>
                        <button onClick={handleLogin}><h1>Login</h1></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
