import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
    email: string,
    password: string
}

const initialState: AuthState = {
    email: '',
    password: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state,action:PayloadAction<AuthState>) => {
            console.log(action.payload);
        }
        ,
    },
})

// Action creators are generated for each case reducer function
export const { login } = authSlice.actions

export default authSlice.reducer
