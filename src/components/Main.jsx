import { View } from 'react-native'
import { Switch, Route } from 'react-router-native'
import AppBar from './AppBar'
import NavigationBar from './NavigationBar'
import WordsList from './WordsList'
import Settings from '../pages/Settings'
import Saved from '../pages/Saved'
import Word from '../pages/Word'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWords } from '../redux/states/words'
import words from '../data/words'
import { ThemeProvider } from 'styled-components'
import themes from '../themes'

const Main = () => {
    const dispatch = useDispatch()
    const { enableDarkTheme } = useSelector(store => store.settings)
    
    useEffect(() => {
        dispatch(addWords(words))
    })

    return (
        <ThemeProvider theme={themes[enableDarkTheme ? 'dark' : 'light']}>
            <View style={{ flex: 1 }}>
                <AppBar />
                <Switch>
                    <Route exact path='/'>
                        <WordsList />
                    </Route>
                    <Route exact path='/settings'>
                        <Settings />
                    </Route>
                    <Route exact path='/saved'>
                        <Saved />
                    </Route>
                    <Route exact path='/word/:word'>
                        <Word />
                    </Route>
                </Switch>
                <NavigationBar />
            </View>
        </ThemeProvider>
    )
}

export default Main