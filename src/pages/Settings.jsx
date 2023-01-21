import { ScrollView, StyleSheet, View, Switch } from 'react-native'
import StyledText from '../components/StyledText'
import { useDispatch, useSelector } from 'react-redux'
import { modifySetting } from '../redux/states/settings'
import { useTheme } from 'styled-components'

const SettingCard = ({ description, prop }) => {
    const value = Object.values(prop)[0]
    const key = Object.keys(prop)[0]
    const dispatch = useDispatch()
    const theme = useTheme()
    
    const toggleSwitch = () => dispatch(modifySetting({ [key]: !value }))

    return <View style={styles.cardContainer}>
        <StyledText style={{ padding: 6 }}>{description}</StyledText>
        <Switch
            trackColor={{ false: theme.colors.secondary, true: theme.colors.textSecondary }}
            thumbColor={theme.colors.white}
            ios_backgroundColor={theme.colors.secondary}
            onValueChange={toggleSwitch}
            value={value}
        />
    </View>
}

const Settings = () => {
    const { hideTranslation, changeToEnglish, enableDarkTheme } = useSelector(store => store.settings)

    return <ScrollView style={styles.container}>
        <SettingCard prop={{ hideTranslation }} description='Ocultar traducción de las palabras' />
        <SettingCard prop={{ changeToEnglish }} description='Cambiar de Español a Inglés' />
        <SettingCard prop={{ enableDarkTheme }} description='Habilitar el tema oscuro' />
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.secondary
    }
})

export default Settings