import { createSlice } from '@reduxjs/toolkit'
import data from '../../data/words'

const initialState = data

export const filteredSlice = createSlice({
    name: 'filtered',
    initialState,
    reducers: {
        search: (state, action) => {
            const search = action.payload
            const filteredWords = initialState.filter(item => item.word.includes(search))
            return filteredWords
        }
    }
})

export const { search } = filteredSlice.actions