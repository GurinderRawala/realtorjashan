import { createSlice } from '@reduxjs/toolkit'

export const HomeScreenSlice = createSlice({
    name: "home", 
    initialState: { isActive: false },
    reducers: {
        Activate: (state, payload) =>{
            return{
                ...state,
                isActive: payload.isActive
            }
        },
    }
})

export const { Activate } = HomeScreenSlice.actions

export default HomeScreenSlice.reducer