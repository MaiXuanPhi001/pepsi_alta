import { useNavigate } from 'react-router-dom';
import React from 'react'
import './homeStyles.css'
import price from '../../assets/images/price.png'
import water from '../../assets/images/water.png'
import Nav from '../reuse/Nav';

function Home() {
    const navigate = useNavigate()

    return (
        <div className='container'>
            <Nav />
            <img src={price} className='img-price' />
            <img src={water} className='img-water' />
            <button className='button-home' onClick={() => navigate('/register')}>
            
            </button>
        </div>
    )
}

export default Home
