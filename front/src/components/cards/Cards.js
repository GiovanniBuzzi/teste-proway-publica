import React from 'react'

import './card.css' 

//// componente card preparado para receber a imagem de fundo
//// e qualquer coisa no seu body (texto, component etc...)

const Cards = ({body,image}) => {
    return (
        <section className='card' style={{
            backgroundSize: 'cover',
            backgroudPosition: 'center',
            backgroundImage: `url(${image})`}}>
                <div className='vert'>
                    <div className='hori'>
                        <div className='content'>
                            {body}
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Cards
