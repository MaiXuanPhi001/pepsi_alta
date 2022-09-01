import {Routes, Route} from 'react-router-dom'
import Home from "../components/home/Home";
import Register from "../components/register/Register";
import ChooseCountry from '../components/select/ChooseCountry';
import Success from '../components/success/Success';
import React from 'react'

function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/success' element={<Success />} />
        <Route path='/choose' element={<ChooseCountry />} />
    </Routes>
  )
}

export default Router