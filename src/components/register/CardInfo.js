import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function CardInfo({ infoCard, dispatch, tinhDB }) {

    const changeCard = (item, action) => {
        dispatch({ type: action, value: item })
    }

    return (
        <div className='card-info'>
            <p className='text-container'>THÔNG TIN MUA HÀNG</p>
            <div className='container-card-info'>
                <div>
                    <p className='text-address'>Tỉnh / Thành Phố</p>
                    <div className='select-container'>
                        <div className='select-content'>
                            <p>{infoCard.card.tinh._id ? infoCard.card.tinh.name : 'Chọn Tỉnh / Thành phố'}</p>
                            <FaChevronDown className='icon-select' />
                        </div>
                        <div className='option-container'>
                            {tinhDB.map(item => {
                                return (
                                    <div onClick={() => changeCard(item, 'CARD/CHANGE_TINH')} className='option-content'>{item.name}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-address'>Quận / Huyện</p>
                    <div className='select-container'>
                        <div className='select-content'>
                            <p>{infoCard.card.huyen._id ? infoCard.card.huyen.name : 'Chọn Quận / Huyện'}</p>
                            <FaChevronDown className='icon-select' />
                        </div>
                        <div className='option-container'>
                            {infoCard.card.listHuyen.map(item => {
                                return (
                                    <div onClick={() => changeCard(item, 'CARD/CHANGE_HUYEN')} className='option-content'>{item.name}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div>
                    <p className='text-address'>Đại lý</p>
                    <div className='select-container'>
                        <div className='select-content'>
                            <p>{infoCard.card.shop._id ? infoCard.card.shop.name : 'Chọn đại lý'}</p>
                            <FaChevronDown className='icon-select' />
                        </div>
                        <div className='option-container'>
                            {infoCard.card.listShop.map(item => {
                                return (
                                    <div onClick={() => changeCard(item, 'CARD/CHANGE_SHOP')} className='option-content'>
                                        <p>{item.name}</p>
                                        <p>{item.address}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

