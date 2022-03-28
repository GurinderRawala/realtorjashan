import React from 'react';
import HomeScreen from '../screens/home-screen';

const ConfigRoutes = ({ Router }) =>{
    const { Routes, Route } = Router

    return(
        
        <Routes>
            <Route path="/" element={<HomeScreen />} />
        </Routes>
    )
}

export default ConfigRoutes