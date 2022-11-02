import { createSlice } from '@reduxjs/toolkit'

export interface LayoutState {
    collapsed: boolean
}

const initialState: LayoutState = {
    collapsed: false,
}

export const layoutSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCollapsed: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.collapsed = !state.collapsed
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCollapsed } = layoutSlice.actions

export default layoutSlice.reducer
