import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    hideTranslation: false,
    changeToEnglish: false,
    enableDarkTheme: false,
    sortFilter: false,
    longerFilter: false,
    reverseFilter: false
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        modifySetting: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export const { modifySetting } = settingsSlice.actions