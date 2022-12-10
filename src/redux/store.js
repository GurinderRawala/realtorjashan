import { configureStore } from '@reduxjs/toolkit'
import  HomeScreenSlice  from './home-screen-slice'

export default configureStore({
    reducer: {
        home: HomeScreenSlice
    },
})