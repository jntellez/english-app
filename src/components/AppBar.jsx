import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import theme from '../theme'
import { getPageId, getPageName } from '../utils/utils'
import SavedButton from './SavedButton'
import { useSelector } from 'react-redux'
import PrevPageButton from './PrevPageButtton'
import styled from 'styled-components/native'

const AppBar = () => {
    const pageName = getPageName()
    const pageId = getPageId()
    const words = useSelector(store => store.words)

    const item = words.find(w => w.word === pageId)
    const title = pageName === 'saved' ? 'Saved' : pageName === 'settings' ? 'Settings' : 'EnglishApp'
    
    const AppbarStyles = [
        styles.container,
        { paddingVertical: pageName === 'word' ? 7 : 20 }
    ]
    
    return (
        <View style={AppbarStyles}>
            <View style={{ flexDirection: 'row' }}>
                {pageName === 'word' && <PrevPageButton />}
                <StyledText color='white' fontWeight='bold'>{title}</StyledText>
            </View>
            {pageName === 'word' && <SavedButton style={{ marginTop: -10 }} item={item} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: 'blue'
    }
})

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: ${Constants.statusBarHeight + 10}px 20px 0 20px;
    background-color: ${({ theme }) => theme.appBar.primary};
`

export default AppBar