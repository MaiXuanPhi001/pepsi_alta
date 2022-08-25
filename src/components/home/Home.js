import React from 'react'
import './homeStyles.css'
import price from '../../assets/images/price.png'
import water from '../../assets/images/water.png'

function Home() {
    const handlerMoveRegister = () => {
        alert('đăng ký')
    }

    return (
        <div className='container'>
            <div className='img-navbar'></div>
            <img src={price} className='img-price' />
            <img src={water} className='img-water' />
            <button onClick={handlerMoveRegister}>

            </button>
        </div>
    )
}

export default Home
