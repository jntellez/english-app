import { FlatList, View } from 'react-native'
import WordItem from '../components/WordItem'
import { useSelector } from 'react-redux'
import StarIcon from '../components/icons/StarIcon'
import { SvgXml } from 'react-native-svg'
import StyledText from '../components/StyledText'
import styled from 'styled-components/native'
import { useTheme } from 'styled-components'
import { useIntl } from 'react-intl'

const SavedEmpty = () => {
    const theme = useTheme()
    const intl = useIntl()
    const { SAVED_EMPTY_COMPONENT } = intl.messages

    return <Container>
        <View>
            <SvgXml xml={StarIcon(theme.colors.secondary, true)} width={90} height={90} />
        </View>
        <StyledText fontSize='subheading' fontWeight='bold' style={{ color: theme.colors.secondary, padding: 15 }}>
            {SAVED_EMPTY_COMPONENT}
        </StyledText>
    </Container>
}

const Saved = () => {
    const data = useSelector(store => store.saved)
    const theme = useTheme()
    
    if(data.length > 0) return <FlatList
        data={data}
        renderItem={({ item: word }) => <WordItem {...word} />}
        style={{ backgroundColor: theme.colors.background }}
    />

    return <SavedEmpty />
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
`

export default Saved