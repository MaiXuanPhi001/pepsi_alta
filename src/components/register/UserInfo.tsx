import React from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function UserInfo(props: any) {
    const { infoCard, dispatch, tinhDB }: any = props
    const changeUser = (item: any, action: any) => {
        dispatch({ type: action, value: item })
    }

    const changeUserInfo = (e: any, action: any) => {
        dispatch({ type: action, value: e.target.value })
    }

    return (
        <div>
            <p className='text-container'>THÔNG TIN NGƯỜI THAM GIA</p>
            <div className='container-user-info'>
                <div>
                    <p className='text-address'>Họ tên</p>
                    <input value={infoCard.user.name} onChange={e => changeUserInfo(e, 'USER/NAME')} placeholder='Nhập họ tên' type={'text'} className='input-register' />
                </div>

                <div>
                    <p className='text-address'>Số điện thoại</p>
                    <input value={infoCard.user.sdt} onChange={e => changeUserInfo(e, 'USER/SDT')} placeholder='Nhập số điện thoại' type={'text'} className='input-register' />
                </div>
            </div>

            <div className='cotainer-party-info'>
                <p className='text-container'>THÔNG TIN TIỆC</p>
                <div className='container-user-info'>
                    <div>
                        <p className='text-address'>Tỉnh / Thành Phố</p>
                        <div className='select-container'>
                            <div className='select-content'>
                                <p>{infoCard.party.tinh._id ? infoCard.party.tinh.name : 'Chọn Tỉnh / Thành phố'}</p>
                                <FaChevronDown className='icon-select' />
                            </div>
                            <div className='option-container'>
                                {tinhDB.map((item: any) => {
                                    return (
                                        <div onClick={() => changeUser(item, 'PARTY/CHANGE_TINH')} className='option-content'>{item.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className='text-address'>Quận / Huyện</p>
                        <div className='select-container'>
                            <div className='select-content'>
                                <p>{infoCard.party.huyen._id ? infoCard.party.huyen.name : 'Chọn Quận / Huyện'}</p>
                                <FaChevronDown className='icon-select' />
                            </div>
                            <div className='option-container'>
                                {infoCard.party.listHuyen.map((item: any) => {
                                    return (
                                        <div onClick={() => changeUser(item, 'PARTY/CHANGE_HUYEN')} className='option-content'>{item.name}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-user-info'>
                    <div>
                        <p className='text-address'>Số nhà, tên đường</p>
                        <input value={infoCard.party.address} onChange={e => changeUserInfo(e, 'PARTY/ADDRESS')} placeholder='Nhập số nhà, tên đường' type={'text'} className='input-register' />
                    </div>

                    <div>
                        <p className='text-address'>Thời gian tiệc</p>
                        <input value={infoCard.party.date} onChange={e => changeUserInfo(e, 'PARTY/DATE')} placeholder='Chọn thời gian' type={'date'} className='input-register' />
                    </div>
                </div>
            </div>
        </div>
    )
}
