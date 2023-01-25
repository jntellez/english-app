import { configureStore } from '@reduxjs/toolkit'
import { wordsSlice } from './states/words'
import { savedSlice } from './states/saved'
import { settingsSlice } from './states/settings'

export const store = configureStore({
    reducer: {
        words: wordsSlice.reducer,
        saved: savedSlice.reducer,
        settings: settingsSlice.reducer
    }
})