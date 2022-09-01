import React, { useRef, useState } from 'react'
import imgfile from '../../assets/images/imgfile.png'

export default function ImageRegister() {
    const [file1, setFile1] = useState('')

    const changeFile = (e) => {
        setFile1(e.target.files[0].name)
    }

    // https://www.pluralsight.com/guides/how-to-use-a-simple-form-submit-with-files-in-react
    console.log('render')
    return (
        <div>
            <p className='text-container'>HÌNH ẢNH</p>
            <div className='container-card-info'>
                <div>
                    <p className='text-address'>Hình thiệp cưới</p>
                    <div className='file-img-register'>
                        <img src={imgfile} />
                        <input type={'file'} id='img1' accept='image/*' onChange={changeFile} />
                        <label htmlFor='img1' className='text-name-file'>
                            {file1 || 'Đính kèm ảnh'}
                        </label>
                    </div>
                </div>

                <div>
                    <p className='text-address'>Hình thiệp cưới</p>
                    <div className='file-img-register'>
                        <img src={imgfile} />
                        <input type={'file'} id='img1' accept='image/*' onChange={changeFile} />
                        <label htmlFor='img1' className='text-name-file'>
                            {file1 || 'Đính kèm ảnh'}
                        </label>
                    </div>
                </div>

                <div>
                    <p className='text-address'>Hình thiệp cưới</p>
                    <div className='file-img-register'>
                        <img src={imgfile} />
                        <input type={'file'} id='img1' accept='image/*' onChange={changeFile} />
                        <label htmlFor='img1' className='text-name-file'>
                            {file1 || 'Đính kèm ảnh'}
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}
