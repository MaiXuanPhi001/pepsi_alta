import React from 'react'
import { useNavigate } from 'react-router-dom';
import './successStyle.css'
export default function Success() {
    const navigate = useNavigate()

    return (
        <div className='success-container'>
            <img src={require('../../assets/images/registersuccess.png')} className='img-register-text' />
            <div>
                <div className='gift-content'>
                    <img src={require('../../assets/images/gift.png')} className='img-gift' />
                    <p className='text-gift-title'>Phần quà bạn sẽ nhận được</p>
                </div>
                <p className='text-gift-deltail'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <img src={require('../../assets/images/pepsi.png')} />

            <div>
                <div className='gift-content'>
                    <img src={require('../../assets/images/gift.png')} className='img-gift' />
                    <p className='text-gift-title'>Why do we use it?</p>
                </div>
                <p className='text-gift-deltail'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            </div>

            <button className='btn-success' onClick={() => navigate('/')} />
        </div>
    )
}
