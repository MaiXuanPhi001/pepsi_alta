import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from '../reuse/Nav'
import './registerStyle.css'
import ice from '../../assets/images/register.png'
import FormRegister from './FormRegister'

function Register() {
    const navigate = useNavigate()

    return (
        <div className='register-container'>
            <Nav />
            <div className='ice-container'>
                <img src={ice} className='img-register' />
                <div className='form-bg-register'>
                    <FormRegister />
                    <div className='ice-footer'></div>
                </div>
            </div>
            <button className='btn-register' onClick={() => navigate('/success')}>

            </button>
        </div>
    )
}

export default Register

const tinhDB = [
    [
        { _id: 'a1', name: 'Hồ Chí Minh' },
        { _id: 'a2', name: 'Hà Nội' },
        { _id: 'a3', name: 'Đà Nẵng' },
        { _id: 'a4', name: 'An Giang' },
        { _id: 'a5', name: 'Bà Rịa - Vũng Tàu' },
        { _id: 'a6', name: 'Bắc Giang' },
        { _id: 'a7', name: 'Bắc Kạn' },
        { _id: 'a8', name: 'Kiên Giang' },
        { _id: 'a9', name: 'Kom Tum' },
        { _id: 'a10', name: 'Lai Châu' },
        { _id: 'a11', name: 'Lâm Đồng' },
        { _id: 'a12', name: 'Lạng Sơn' },
        { _id: 'a13', name: 'Lào Cai' },
        { _id: 'a14', name: 'Long An' },
    ]
]

const huyenDB = [
    { _id: 'b1', name: 'TP.Thủ Đức', id_tinh: 'a1' },
    { _id: 'b2', name: 'Quận 1', id_tinh: 'a1' },
    { _id: 'b3', name: 'Quận 2', id_tinh: 'a1' },
    { _id: 'b4', name: 'Quận 3', id_tinh: 'a1' },
    { _id: 'b5', name: 'Quận 4', id_tinh: 'a1' },
    { _id: 'b6', name: 'Quận 5', id_tinh: 'a1' },
    { _id: 'b7', name: 'Quận 6', id_tinh: 'a1' },
    { _id: 'b8', name: 'Quận Bình Tân', id_tinh: 'a1' },
    { _id: 'b9', name: 'Quận Bình Thạnh', id_tinh: 'a1' },
    { _id: 'b10', name: 'Quận Gò Vấp', id_tinh: 'a1' },
    { _id: 'b11', name: 'Quận Phú Nhuận', id_tinh: 'a1' },
    { _id: 'b12', name: 'Quận Tân Bình', id_tinh: 'a1' },
    { _id: 'b13', name: 'Quận Tân Phú', id_tinh: 'a1' },
    { _id: 'b14', name: 'Huyện Bình Chánh', id_tinh: 'a1' },
]