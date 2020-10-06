import React from 'react'

import './header.css'

/// componente de header chamado em quase toda aplicação
//// nas divs tem algums icones que eu copiei do bootstrap
//// função logout que remove todas informações do usuario dos storages

const Header = () => {

    function doLogout(){
        sessionStorage.removeItem('user_name');
        sessionStorage.removeItem('@token_jwt');
        sessionStorage.removeItem('user_id');
        sessionStorage.removeItem('su');
        localStorage.removeItem('login');

        window.location.replace('/');

    }

    function doBack(){
        window.location.replace('/main');
    }

    return (
        <div className='header'>

            <div className='header-box'>
                <div className='user'><h2>Welcome {sessionStorage.getItem('user_name')}</h2></div>
                <div> </div>
                <div> </div>
                <div className='logout'>
                    <button className='botao' onClick={doLogout}><h1>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-person-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10zm1.146-7.85a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                        </svg></h1>
                    </button>
                    <button className='botao' onClick={doBack}><h1>
                        <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-return-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                        </svg></h1>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;
