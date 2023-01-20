import { createSlice } from "@reduxjs/toolkit";

const savedEmptyState = []

export const savedSlice = createSlice({
    name: 'saved',
    initialState: savedEmptyState,
    reducers: {
        addSaved: (state, action) => {
            return action.payload
        },
        removeSaved: (state, action) => {
            const saved = state.filter(item => item.word !== action.payload)
            return saved
        }
    }
})

export const { addSaved, removeSaved } = savedSlice.actions