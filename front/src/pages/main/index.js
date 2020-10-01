import React from 'react'

const Main = () => {
    return (
        <div>
            <p>OLA {sessionStorage.getItem('user_name')}</p>
            <p>MEUS JOGOS</p>
            <p>MEUS RECORDES</p>
            <p>RECORDES GLOBAIS</p>
        </div>
    )
}

export default Main;
