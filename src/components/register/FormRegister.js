import React from 'react'
import CardInfo from './CardInfo'
import ImageRegister from './ImageRegister'
import UserInfo from './UserInfo'

export default function FormRegister() {
    return (
        <div className='form-register'>
            <CardInfo />
            <UserInfo />
            <ImageRegister />
        </div>
    )
}
