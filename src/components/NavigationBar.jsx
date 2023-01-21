import { TouchableWithoutFeedback, View } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import HomeIcon from './icons/HomeIcon'
import StarIcon from './icons/StarIcon'
import SettingsIcon from './icons/SettingsIcon'
import { SvgXml } from 'react-native-svg'
import { getPageName } from '../utils/utils'
import styled from 'styled-components/native'
import { useTheme } from 'styled-components'

const NavigationBarTab = ({ renderIcon, to }) => {
    const { pathname } = useLocation()
    const pageName = getPageName()
    const active = pathname === to || pageName === 'word' && to === '/'
    const theme = useTheme()
    const icon = renderIcon ? renderIcon(theme.colors.textSecondary, active) : HomeIcon()

    return <Link to={to} component={TouchableWithoutFeedback}>
        <View style={{ padding: 5 }}>
            <SvgXml xml={icon} width={30} height={30}/>
        </View>
    </Link>
}

const NavigationBar = () => {
    return <Container>
        <NavigationBarTab to='/' renderIcon={HomeIcon} />
        <NavigationBarTab to='/saved' renderIcon={StarIcon} />
        <NavigationBarTab to='/settings' renderIcon={SettingsIcon} />
    </Container>
}

const Container = styled.View`
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 2px;
    border-top-color: ${({ theme }) => theme.colors.secondary};
    padding-top: 9px;
    padding-bottom: 41px;
    background-color: ${({ theme }) => theme.colors.background};
`

export default NavigationBar