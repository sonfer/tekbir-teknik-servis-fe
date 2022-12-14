import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios";
import {UserAuth} from "../../models/User";
import {ResponseMain} from "../../models/Response";
import {counterSlice} from "../counter/counterSlice";
import {getUserData} from "../../helpers/storage";

export interface AuthState {
    user: UserAuth | undefined
    loading: boolean
}


const initialState: AuthState = {
    user: getUserData(),
    loading: false
}

export const login = createAsyncThunk(
    'user/login',
    async ( {email,password}: any,thunkAPI) => {
        const response = await axios.post<ResponseMain<UserAuth>>(`/User/Login`,{
            email,
            password
        });

        return response.data
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = undefined
            localStorage.removeItem('userData')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state,action) => {state.loading = true})
        builder.addCase(login.fulfilled,(state,action) => {
            state.user = action.payload.data
            state.loading = false
            localStorage.setItem('userData',JSON.stringify(action.payload.data));
        })
    }
})

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions

export default authSlice.reducer
