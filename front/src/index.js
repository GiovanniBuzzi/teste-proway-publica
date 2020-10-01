import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'

ReactDOM.render(
    <section className='appBack' style={{
                backgroundSize: 'cover',
                backgroudPosition: 'center',
                backgroundImage: `url(https://images2.alphacoders.com/654/654783.jpg)`}}>
        <div className='horizontal'><div className='vertical'><App /></div></div>
        
    </section>
        ,document.getElementById('root'));