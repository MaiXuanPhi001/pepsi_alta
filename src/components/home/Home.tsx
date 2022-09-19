import { useNavigate } from 'react-router-dom';
import React from 'react'
import './homeStyles.css'
import Nav from '../reuse/Nav';

function Home() {
    const navigate = useNavigate()

    return (
        <div className='container'>
            <Nav />
            <img src={require('../../assets/images/price.png')} className='img-price' />
            <img src={require('../../assets/images/water.png')} className='img-water' />
            <button className='button-home' onClick={() => navigate('/register')}>

            </button>
        </div>
    )
}

export default Home
