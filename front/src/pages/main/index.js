import React from 'react'

import Header from '../../components/header/Header'
import Card from '../../components/cards/Cards'

import './main.css'

const Main = () => {
    return (
        <div className='main'>
            <Header/>
            <div className='boxcards'>
                <div className='cards'>
                    <Card body="My Games" image="https://i.pinimg.com/564x/f2/78/2e/f2782effef25f4f3ec7b90b8fcfc1ce5.jpg"/>
                    <Card body="My Records" image="https://i.pinimg.com/originals/eb/f0/86/ebf0868d6e166eb6751b4904dc6df3d0.jpg"/>
                    <Card body="General Records" image="https://s2.best-wallpaper.net/wallpaper/iphone/1709/Graffiti-hands-basketball-net-creative_iphone_750x1334.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default Main;
