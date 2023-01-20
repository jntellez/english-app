import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native'
import theme from '../theme'
import StyledText from './StyledText'
import { Link } from 'react-router-native'
import SavedButton from './SavedButton'
import { useSelector } from 'react-redux'

const WordItem = (item) => {
    const { hideTranslation } = useSelector(store => store.settings)

    return <Link to={`/word/${item.word}`} component={TouchableWithoutFeedback}>
        <View style={styles.container}>
            <StyledText style={styles.text}>{item.word}</StyledText>
            {!hideTranslation && <StyledText style={styles.text} color='secondary'>{item.spanishTranslation}</StyledText>}
            <SavedButton item={item} />
        </View>
    </Link>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginHorizontal: 10,
        backgroundColor: theme.colors.white,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.secondary
    },
    text: {
        padding: 20
    }
})

export default WordItem