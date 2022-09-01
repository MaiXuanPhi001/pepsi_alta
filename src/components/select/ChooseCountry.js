import React, { useEffect, useState } from 'react'

const tinhDB =
    [
        { _id: 'a1', name: 'Hồ Chí Minh' },
        { _id: 'a2', name: 'Thừa Thiên Huế' },
        { _id: 'a3', name: 'hà nội' }
    ]
const huyenDB =
    [
        { _id: 'b1', name: 'Quận 1', _tinh: 'a1' },
        { _id: 'b2', name: 'Quận 2', _tinh: 'a1' },
        { _id: 'b3', name: 'Quận 3', _tinh: 'a1' },
        { _id: 'b4', name: 'Phú lộc', _tinh: 'a2' },
        { _id: 'b5', name: 'Phú vang', _tinh: 'a2' },
        { _id: 'b6', name: 'Bàu đá', _tinh: 'a2' },
        { _id: 'b7', name: 'Hàng chè', _tinh: 'a3' },
        { _id: 'b8', name: 'Hàng Rau', _tinh: 'a3' },
        { _id: 'b9', name: 'Hàng quan', _tinh: 'a3' },
    ]
const diachiDB =
    [
        { _id: 'c1', name: 'Tạp hóa quận 1', huyen: 'b1' },
        { _id: 'c2', name: 'Bách hóa xanh quận 1', huyen: 'b1' },

        { _id: 'c3', name: 'Tạp hóa quận 2', huyen: 'b2' },
        { _id: 'c4', name: 'Bách hóa xanh quận 2', huyen: 'b2' },

        { _id: 'c5', name: 'Tạp hóa quận 3', huyen: 'b3' },
        { _id: 'c6', name: 'Bách hóa xanh quận 3', huyen: 'b3' },

        { _id: 'c7', name: 'Tạp hóa phú lộc', huyen: 'b4' },
        { _id: 'c8', name: 'Bách hóa xanh phú lộc', huyen: 'b4' },

        { _id: 'c9', name: 'Tạp hóa phú vang', huyen: 'b5' },
        { _id: 'c10', name: 'Bách hóa xanh phú vang', huyen: 'b5' },

        { _id: 'c11', name: 'Tạp hóa bàu đá', huyen: 'b6' },
        { _id: 'c12', name: 'Bách hóa xanh bàu đá', huyen: 'b6' },

        { _id: 'c13', name: 'Tạp hóa hàng chè', huyen: 'b7' },
        { _id: 'c14', name: 'Bách hóa xanh hàng chè', huyen: 'b7' },

        { _id: 'c15', name: 'Tạp hóa hàng rau', huyen: 'b8' },
        { _id: 'c16', name: 'Bách hóa xanh hàng rau', huyen: 'b8' },

        { _id: 'c1', name: 'Tạp hóa hàng quan', huyen: 'b9' },
        { _id: 'c1', name: 'Bach hóa xanh hàng quan', huyen: 'b9' }
    ]

function ChooseCountry() {
    const [tinh, setTinh] = useState('')
    const [huyen, setHuyen] = useState('')
    const [diachi, setDiachi] = useState('')
    const [listHuyen, setListHuyen] = useState([])
    const [listAdress, setListAdress] = useState([])

    useEffect(() => {
        setListHuyen(huyenDB.filter(item => item._tinh === tinh))
        setListAdress(diachiDB.filter(item => item.huyen === huyen))
    }, [tinh, huyen])

    const handler = (e) => {
        console.log('Tinh: ' + JSON.stringify({ tinh, huyen, diachi }))
    }

    const handleChange = (event, type) => {
        switch (type) {
            case 0: {
                setTinh(event.target.value)
                setHuyen('')
            }
                break
            case 1: setHuyen(event.target.value)
                break
            case 2: setDiachi(event.target.value)
                break
            default:
        }
    }

    return (
        <div>
            <select value={tinh} onChange={(e) => handleChange(e, 0)}>
                <option value={''}></option>
                {tinhDB.map(item => <option value={item._id}>{item.name}</option>)}
            </select>
            <select value={huyen} onChange={(e) => handleChange(e, 1)}>
                <option value={''}></option>
                {listHuyen.map(item => <option value={item._id}>{item.name}</option>)}
            </select>
            <select value={diachi} onChange={(e) => handleChange(e, 2)}>
                <option value={''}></option>
                {listAdress.map(item => <option value={item._id}>{item.name}</option>)}
            </select>
            <button onClick={handler}></button>
            <input type={'file'} id='myInput' accept='image/*' />
            <label htmlFor='myInput'>
                Đính kèm hình
            </label>
        </div>
    )
}

export default ChooseCountry