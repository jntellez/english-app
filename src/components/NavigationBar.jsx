import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import HomeIcon from './icons/HomeIcon'
import StarIcon from './icons/StarIcon'
import SettingsIcon from './icons/SettingsIcon'
import { SvgXml } from 'react-native-svg'
import theme from '../theme'
import { getPageName } from '../utils/utils'

const NavigationBarTab = ({ renderIcon, to }) => {
    const { pathname } = useLocation()
    const pageName = getPageName()
    const active = pathname === to || pageName === 'word' && to === '/'
    const icon = renderIcon ? renderIcon(theme.colors.textSecondary, active) : HomeIcon()

    return <Link to={to} component={TouchableWithoutFeedback}>
        <View style={{ padding: 5 }}>
            <SvgXml xml={icon} width={30} height={30}/>
        </View>
    </Link>
}

const NavigationBar = () => {
    return <View style={styles.container}>
        <NavigationBarTab to='/' renderIcon={HomeIcon} />
        <NavigationBarTab to='/saved' renderIcon={StarIcon} />
        <NavigationBarTab to='/settings' renderIcon={SettingsIcon} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 2,
        borderTopColor: theme.colors.secondary,
        paddingTop: 9,
        paddingBottom: 41
    }
})

export default NavigationBar