import React from 'react'

export default function CardInfo() {
    return (
        <div className='card-info'>
            <p className='text-container'>THÔNG TIN MUA HÀNG</p>
            <div className='container-card-info'>
                <div>
                    <p className='text-address'>Tỉnh / Thành Phố</p>
                    <select className='select-register' >
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

                <div>
                    <p className='text-address'>Đại lý</p>
                    <select className='select-register'>
                        <option value={''} className='option-default'>Chọn tên đại lý</option>
                        <option value={'a1'} > Hồ Chí Minh</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
