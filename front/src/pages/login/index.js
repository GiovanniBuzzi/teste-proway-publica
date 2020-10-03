import React, {useState} from 'react'

import api from '../../services/api'

import './login.css'

function Login() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
        api.post('/users/login',{login:user, password:password})
        .then((response) => doRedirect(response))
        .catch(localStorage.setItem('login',false));    
    }

    function handleSignUp(){
        window.location.replace('/sign-up');
    }

    function doRedirect(response){
        if(response.data.auth === true){
            localStorage.setItem('login',response.data.auth);
            sessionStorage.setItem('@token_jwt',response.data.token);
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
                        <button onClick={handleLogin}><h1>Sign In</h1></button>
                        <button onClick={handleSignUp}><h1>Sign Up</h1></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
