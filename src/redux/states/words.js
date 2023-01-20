import { createSlice } from '@reduxjs/toolkit'

const wordsEmptyState = []

export const wordsSlice = createSlice({
    name: 'words',
    initialState: wordsEmptyState,
    reducers: {
        addWords: (state, action) => {
            return action.payload
        }
    }
})

export const { addWords } = wordsSlice.actions