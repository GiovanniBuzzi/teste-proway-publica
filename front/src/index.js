import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'
import Img from './images/8.jpg'

ReactDOM.render(
    <section className='appBack' style={{
                backgroundSize: 'cover',
                backgroudPosition: 'center',
                backgroundImage: `url(${Img})`}}>
        <div className='horizontal'><div className='vertical'><App /></div></div>
        
    </section>
        ,document.getElementById('root'));