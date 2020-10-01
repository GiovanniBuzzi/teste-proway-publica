import React from 'react'

import Header from '../../components/header/header'

const Main = () => {
    return (
        <div>
            <Header/>
            <p>OLA {sessionStorage.getItem('user_name')}</p>
            <p>MEUS JOGOS</p>
            <p>MEUS RECORDES</p>
            <p>RECORDES GLOBAIS</p>
        </div>
    )
}

export default Main;