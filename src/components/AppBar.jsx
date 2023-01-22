import { View } from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import { getPageId, getPageName } from '../utils/utils'
import SavedButton from './SavedButton'
import { useSelector } from 'react-redux'
import PrevPageButton from './PrevPageButtton'
import styled from 'styled-components/native'
import { useIntl } from 'react-intl'

const AppBar = () => {
    const pageName = getPageName()
    const pageId = getPageId()
    const words = useSelector(store => store.words)
    const intl = useIntl()
    const { SAVED_TITLE, SETTINGS_TITLE } = intl.messages

    const item = words.find(w => w.word === pageId)
    const title = pageName === 'saved' ? SAVED_TITLE : pageName === 'settings' ? SETTINGS_TITLE : 'EnglishApp'

    const isPageWord = pageName === 'word'
    
    return (
        <Container pageWord={isPageWord}>
            <View style={{ flexDirection: 'row' }}>
                {pageName === 'word' && <PrevPageButton />}
                <StyledText color='white' fontWeight='bold'>{title}</StyledText>
            </View>
            {pageName === 'word' && <SavedButton style={{ marginTop: -10 }} item={item} />}
        </Container>
    )
}

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ pageWord }) => pageWord ? '7px 20px' : '20px'};
    padding-top: ${Constants.statusBarHeight + 10}px;
    background-color: ${({ theme }) => theme.appBar.primary};
`

export default AppBar