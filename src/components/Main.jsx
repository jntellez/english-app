import { View } from 'react-native'
import { Switch, Route, Redirect } from 'react-router-native'
import AppBar from './AppBar'
import NavigationBar from './NavigationBar'
import Home from '../pages/Home'
import Saved from '../pages/Saved'
import Word from '../pages/Word'
import Settings from '../pages/Settings'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWords } from '../redux/states/words'
import words from '../data/words'
import { ThemeProvider } from 'styled-components'
import themes from '../themes'
import { IntlProvider } from 'react-intl'
import EnglishMessages from '../langs/en-US.json'
import SpanishMessages from '../langs/es-MX.json'

const Main = () => {
    const dispatch = useDispatch()
    const { changeToEnglish, enableDarkTheme } = useSelector(store => store.settings)
    
    useEffect(() => {
        dispatch(addWords(words))
    })

    return (
        <ThemeProvider theme={themes[enableDarkTheme ? 'dark' : 'light']}>
            <IntlProvider
                locale={changeToEnglish ? 'en-US' : 'es-MX'}
                messages={changeToEnglish ? EnglishMessages : SpanishMessages}
            >
                <View style={{ flex: 1 }}>
                    <AppBar />
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route exact path='/saved'>
                            <Saved />
                        </Route>
                        <Route exact path='/settings'>
                            <Settings />
                        </Route>
                        <Route exact path='/word/:word'>
                            <Word />
                        </Route>
                        <Redirect to='/' />
                    </Switch>
                    <NavigationBar />
                </View>
            </IntlProvider>
        </ThemeProvider>
    )
}

export default Main