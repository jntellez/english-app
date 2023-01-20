import { FlatList, StyleSheet, View } from 'react-native'
import WordItem from '../components/WordItem'
import { useSelector } from 'react-redux'
import StarIcon from '../components/icons/StarIcon'
import { SvgXml } from 'react-native-svg'
import theme from '../theme'
import StyledText from '../components/StyledText'

const SavedEmpty = () => {
    return <View style={styles.container}>
        <View>
            <SvgXml xml={StarIcon(theme.colors.secondary, true)} width={90} height={90} />
        </View>
        <StyledText fontSize='subheading' fontWeight='bold' style={styles.text}>
            No hay elementos guardados
        </StyledText>
    </View>
}

const Saved = () => {
    const data = useSelector(store => store.saved)
    
    if(data.length > 0) return <FlatList
        data={data}
        renderItem={({ item: word }) => <WordItem {...word} />}
    />

    return <SavedEmpty />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: theme.colors.secondary,
        padding: 15
    }
})

export default Saved