import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    login: false,
    userData: null
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginHandle: (state, action) => {
            state.login = true
            state.userData = action.payload
        },
        logoutHandle: (state) => {
            state.login = false
            state.userData = null
        }
    },
})

export const { loginHandle, logoutHandle } = loginSlice.actions

export default loginSlice.reducer