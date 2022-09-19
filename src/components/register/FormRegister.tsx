import React from 'react'
import CardInfo from './CardInfo'
import ImageRegister from './ImageRegister'
import UserInfo from './UserInfo'

export default function FormRegister(props: any) {
    const { infoCard, dispatch, tinhDB }: any = props
    return (
        <div className='form-register'>
            <CardInfo
                infoCard={infoCard}
                dispatch={dispatch}
                tinhDB={tinhDB}
            />
            <UserInfo
                infoCard={infoCard}
                dispatch={dispatch}
                tinhDB={tinhDB}
            />
            <ImageRegister
                infoCard={infoCard}
                dispatch={dispatch}
            />
        </div>
    )
}
