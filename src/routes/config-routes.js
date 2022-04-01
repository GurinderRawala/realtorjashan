import React from 'react';
import HomeScreen from '../screens/home-screen';
import { Routes, Route  } from 'react-router-dom';
import ContactScreen from '../screens/contact-screen';
const ConfigRoutes = () =>{

    return(
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/contact' element={<ContactScreen />} />
        </Routes>
    )
}

export default ConfigRoutes