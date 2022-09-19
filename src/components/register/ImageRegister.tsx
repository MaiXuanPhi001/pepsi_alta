import React, { useRef, useState } from 'react'

export default function ImageRegister(props: any) {
    const { infoCard, dispatch }: any = props
    const [file1, setFile1] = useState<string>('')

    const changeFile = (e: any, action: any) => {
        console.log('file: ' + JSON.stringify(e.target.files[0]))
        dispatch({
            type: action,
            name: e.target.files[0].name,
            file: e.target.files[0]
        })
    }

    // https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react

    return (
        <div>
            <p className='text-container'>HÌNH ẢNH</p>
            <div className='container-card-info'>
                <div>
                    <p className='text-address'>Hình thiệp cưới</p>
                    <div className='file-img-register'>
                        <img src={require('../../assets/images/imgfile.png')} />
                        <input type='file' id='img1' onChange={e => changeFile(e, 'IMAGES/WEDDINGINITATION')} />
                        <label htmlFor='img1' className='text-name-file'>
                            {infoCard.images.weddingInitationName || 'Đính kèm ảnh'}
                        </label>
                    </div>
                </div>

                <div>
                    <p className='text-address'>Hình hóa đơn bán hàng</p>
                    <div className='file-img-register'>
                        <img src={require('../../assets/images/imgfile.png')} />
                        <input type='file' id='img2' onChange={e => changeFile(e, 'IMAGES/BILL')} />
                        <label htmlFor='img2' className='text-name-file'>
                            {infoCard.images.billName || 'Đính kèm ảnh'}
                        </label>
                    </div>
                </div>

                <div>
                    <p className='text-address'>Hình khối sản phẩm</p>
                    <div className='file-img-register'>
                        <img src={require('../../assets/images/imgfile.png')} />
                        <input type='file' id='img3' onChange={e => changeFile(e, 'IMAGES/PRODUCT')} />
                        <label htmlFor='img3' className='text-name-file'>
                            {infoCard.images.productName || 'Đính kèm ảnh'}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}



