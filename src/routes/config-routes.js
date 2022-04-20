import React from 'react';
import HomeScreen from '../screens/home-screen';
import { Routes, Route  } from 'react-router-dom';
import ContactScreen from '../screens/contact-screen';
import AboutScreen from '../screens/about-screen';
const ConfigRoutes = () =>{

    return(
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path='/contact' element={<ContactScreen />} />
            <Route path='/about' element={<AboutScreen />} />
        </Routes>
    )
}

export default ConfigRoutes