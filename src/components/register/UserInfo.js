import React from 'react'

export default function UserInfo() {
    return (
        <div>
            <p className='text-container'>THÔNG TIN NGƯỜI THAM GIA</p>
            <div className='container-user-info'>
                <div>
                    <p className='text-address'>Họ tên</p>
                    <input pla placeholder='Nhập họ tên' type={'text'} className='input-register' />
                </div>

                <div>
                    <p className='text-address'>Số điện thoại</p>
                    <input placeholder='Nhập số điện thoại' type={'text'} className='input-register' />
                </div>
            </div>

            <div className='cotainer-party-info'>
                <p className='text-container'>THÔNG TIN TIỆC</p>
                <div className='container-user-info'>
                    <div>
                        <p className='text-address'>Tỉnh / Thành Phố</p>
                        <select className='select-register'>
                            <option value={''} className='option-default'>Chọn Tỉnh / Thành phố</option>
                            <option value={'a1'} > Hồ Chí Minh</option>
                        </select>
                    </div>

                    <div>
                        <p className='text-address'>Quận / Huyện</p>
                        <select className='select-register'>
                            <option value={''} className='option-default'>Chọn Quận / Huyện</option>
                            <option value={'a1'} > Hồ Chí Minh</option>
                        </select>
                    </div>
                </div>

                <div className='container-user-info'>
                    <div>
                        <p className='text-address'>Số nhà, tên đường</p>
                        <input placeholder='Nhập số nhà, tên đường' type={'text'} className='input-register' />
                    </div>

                    <div>
                        <p className='text-address'>Thời gian tiệc</p>
                        <input placeholder='Chọn thời gian' type={'date'} className='input-register' />
                    </div>
                </div>
            </div>
        </div>
    )
}
