import { ScrollView, Switch } from 'react-native'
import StyledText from '../components/StyledText'
import { useDispatch, useSelector } from 'react-redux'
import { modifySetting } from '../redux/states/settings'
import { useTheme } from 'styled-components'
import styled from 'styled-components/native'
import { useIntl } from 'react-intl'

const SettingCard = ({ description, prop }) => {
    const value = Object.values(prop)[0]
    const key = Object.keys(prop)[0]
    const dispatch = useDispatch()
    const theme = useTheme()
    
    const toggleSwitch = () => dispatch(modifySetting({ [key]: !value }))

    return <CardContainer>
        <StyledText style={{ padding: 6 }}>{description}</StyledText>
        <Switch
            trackColor={{ false: theme.colors.secondary, true: theme.colors.textSecondary }}
            thumbColor={theme.colors.white}
            ios_backgroundColor={theme.colors.secondary}
            onValueChange={toggleSwitch}
            value={value}
        />
    </CardContainer>
}

const Settings = () => {
    const { hideTranslation, changeToEnglish, enableDarkTheme } = useSelector(store => store.settings)
    const theme = useTheme()
    const intl = useIntl()
    const { SETTINGS_HIDE_TRANSLATION, SETTINGS_CHANGE_TO_ENGLISH, SETTINGS_ENABLE_DARK_THEME } = intl.messages

    return <ScrollView style={{ paddingHorizontal: 10, backgroundColor: theme.colors.background }}>
        <SettingCard prop={{ hideTranslation }} description={SETTINGS_HIDE_TRANSLATION} />
        <SettingCard prop={{ changeToEnglish }} description={SETTINGS_CHANGE_TO_ENGLISH} />
        <SettingCard prop={{ enableDarkTheme }} description={SETTINGS_ENABLE_DARK_THEME} />
    </ScrollView>
}

const CardContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.background};
`

export default Settings