import React, { useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from '../reuse/Nav'
import './registerStyle.css'
import FormRegister from './FormRegister'
import CardInfo from './CardInfo';

const initInfoCard = {
    type: '',
    card: {
        tinh: {},
        huyen: {},
        shop: {},
        listHuyen: [],
        listShop: []
    },
    user: {
        name: '',
        sdt: '',
    },
    party: {
        tinh: {},
        huyen: {},
        shop: {},
        listHuyen: [],
        address: '',
        date: ''
    },
    images: {
        weddingInitation: null,
        weddingInitationName: '',
        bill: null,
        billName: '',
        product: null,
        productName: '',
    }
}

const infoCardReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'CARD/CHANGE_TINH':
            return {
                ...state,
                card: {
                    ...state.card,
                    tinh: action.value,
                    listHuyen: huyenDB.filter(item => item.id_tinh === action.value._id)
                }
            }


        case 'CARD/CHANGE_HUYEN':
            return {
                ...state,
                card: {
                    ...state.card,
                    huyen: action.value,
                    listShop: shopDB.filter(item => item.id_huyen === action.value._id)
                }
            }


        case 'CARD/CHANGE_SHOP':
            return {
                ...state,
                card: {
                    ...state.card,
                    shop: action.value
                }
            }


        case 'USER/NAME':
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.value
                }
            }

        case 'USER/SDT':
            return {
                ...state,
                user: {
                    ...state.user,
                    sdt: action.value
                }
            }

        case 'PARTY/CHANGE_TINH':
            return {
                ...state,
                party: {
                    ...state.party,
                    tinh: action.value,
                    listHuyen: huyenDB.filter(item => item.id_tinh === action.value._id)
                }
            }

        case 'PARTY/CHANGE_HUYEN':
            return {
                ...state,
                party: {
                    ...state.party,
                    huyen: action.value
                }
            }

        case 'PARTY/ADDRESS':
            return {
                ...state,
                party: {
                    ...state.party,
                    address: action.value
                }
            }

        case 'PARTY/DATE':
            return {
                ...state,
                party: {
                    ...state.party,
                    date: action.value
                }
            }

        case 'IMAGES/WEDDINGINITATION':
            return {
                ...state,
                images: {
                    ...state.images,
                    weddingInitation: action.file,
                    weddingInitationName: action.name,
                }
            }

        case 'IMAGES/BILL':
            return {
                ...state,
                images: {
                    ...state.images,
                    bill: action.file,
                    billName: action.name,
                }
            }

        case 'IMAGES/PRODUCT':
            return {
                ...state,
                images: {
                    ...state.images,
                    product: action.file,
                    productName: action.name,
                }
            }

        default: return state
    }
}

function Register() {
    const [infoCard, infoCardDispatch] = useReducer(infoCardReducer, initInfoCard)
    const navigate = useNavigate()

    console.log('infoCard: ' + JSON.stringify(infoCard))

    const inserUser = () => {
        const formData = new FormData()
        formData.append('tinhCard', infoCard.card.tinh.name)
        formData.append('huyenCard', infoCard.card.huyen.name)
        formData.append('shopCard', infoCard.card.shop.name)
        formData.append('tinhParty', infoCard.party.tinh.name)
        formData.append('huyenParty', infoCard.party.huyen.name)
        formData.append('fullName', infoCard.user.name)
        formData.append('sdt', infoCard.user.sdt)
        formData.append('address', infoCard.party.address)
        formData.append('date', infoCard.party.date)
        formData.append('images', infoCard.images.weddingInitation)
        formData.append('images', infoCard.images.bill)
        formData.append('images', infoCard.images.product)

        fetch('http://192.168.12.67:4000/users/insertUserPepsi', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                !res.error &&  navigate('/success')
            })
            .catch(err => console.log('error: ' + JSON.stringify(err)))
    }

    return (
        <div className='register-container'>
            <Nav />
            <div className='ice-container'>
                <img src={require('../../assets/images/register.png')} className='img-register' />
                <div className='form-bg-register'>
                    <FormRegister
                        infoCard={infoCard}
                        dispatch={infoCardDispatch}
                        tinhDB={tinhDB}
                    />
                    <div className='ice-footer'></div>
                </div>
            </div>
            <button className='btn-register' onClick={inserUser}>

            </button>
        </div>
    )
}

export default Register

const tinhDB = [
    { _id: 'a1', name: 'H??? Ch?? Minh' },
    { _id: 'a2', name: 'H?? N???i' },
    { _id: 'a3', name: '???? N???ng' },
    { _id: 'a4', name: 'An Giang' },
    { _id: 'a5', name: 'B?? R???a - V??ng T??u' },
    { _id: 'a6', name: 'B???c Giang' },
    { _id: 'a7', name: 'B???c K???n' },
    { _id: 'a8', name: 'Ki??n Giang' },
    { _id: 'a9', name: 'Kom Tum' },
    { _id: 'a10', name: 'Lai Ch??u' },
    { _id: 'a11', name: 'L??m ?????ng' },
    { _id: 'a12', name: 'L???ng S??n' },
    { _id: 'a13', name: 'L??o Cai' },
    { _id: 'a14', name: 'Long An' },
]


const huyenDB = [
    { _id: 'b1', name: 'TP.Th??? ?????c', id_tinh: 'a1' },
    { _id: 'b2', name: 'Qu???n 1', id_tinh: 'a1' },
    { _id: 'b3', name: 'Qu???n 2', id_tinh: 'a1' },
    { _id: 'b4', name: 'Qu???n 3', id_tinh: 'a1' },
    { _id: 'b5', name: 'Qu???n 4', id_tinh: 'a1' },
    { _id: 'b6', name: 'Qu???n 5', id_tinh: 'a1' },
    { _id: 'b7', name: 'Qu???n 6', id_tinh: 'a1' },
    { _id: 'b8', name: 'Qu???n B??nh T??n', id_tinh: 'a1' },
    { _id: 'b9', name: 'Qu???n B??nh Th???nh', id_tinh: 'a1' },
    { _id: 'b10', name: 'Qu???n G?? V???p', id_tinh: 'a1' },
    { _id: 'b11', name: 'Qu???n Ph?? Nhu???n', id_tinh: 'a1' },
    { _id: 'b12', name: 'Qu???n T??n B??nh', id_tinh: 'a1' },
    { _id: 'b13', name: 'Qu???n T??n Ph??', id_tinh: 'a1' },
    { _id: 'b14', name: 'Huy???n B??nh Ch??nh', id_tinh: 'a1' },
]

const shopDB = [
    { _id: 'c1', name: 'B??ch H??a Xanh ??u C??', address: '101 ??u C??, P.7, Q.T??n B??nh, TP.HCM', id_huyen: 'b12' },
    { _id: 'c2', name: 'T???p h??a c?? Hoa', address: '77 ??u C??, P.7, Q.T??n B??nh, TP.HCM', id_huyen: 'b12' },
    { _id: 'c3', name: 'Th???c ph???m s???ch', address: '122 ??u C??, P.7, Q.T??n B??nh, TP.HCM', id_huyen: 'b12' },
    { _id: 'c4', name: 'Th???c ph???m ????ng l???nh', address: '123 ??u C??, P.7, Q.T??n B??nh, TP.HCM', id_huyen: 'b12' },
    { _id: 'c5', name: 'Fresh drink', address: '47 ??u C??, P.7, Q.T??n B??nh, TP.HCM', id_huyen: 'b12' },
    { _id: 'c6', name: 'Coop mart ??u C??', address: '57 ??u C??, P.7, Q.T??n B??nh, TP.HCM', id_huyen: 'b12' },
    { _id: 'c7', name: 'Mini market', address: '124 ??u C??, P.7, Q.T??n B??nh, TP.HCM', id_huyen: 'b12' },
]

