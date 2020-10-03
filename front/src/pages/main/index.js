import React from 'react';

import { Link } from 'react-router-dom';

import Header from '../../components/header/Header.js';
import Card from '../../components/cards/Cards.js';

import Img1 from '../../images/7.jpg';
import Img2 from '../../images/6.jpg';
import Img3 from '../../images/5.jpg';
import Img4 from '../../images/2.jpg';

import './main.css';

//// pagina main da aplicação ////

const Main = () => {
    return (
        <div className='main'>
            <Header/>
            <div className='boxcards'>
                <div className='cards'>
                    <Link to='/games' style={{textDecoration:'none'}}><Card body="My Games" image={Img1}/></Link>
                    <Link to='/records' style={{textDecoration:'none'}}><Card body="My Records" image={Img2}/></Link>
                    <Link to='/general-records' style={{textDecoration:'none'}}><Card body="General Records" image={Img3}/></Link>
                    <Link to='/teams' style={{textDecoration:'none'}}><Card body="Teams" image={Img4}/></Link>
                </div>
            </div>
        </div>
    )
}

export default Main;
