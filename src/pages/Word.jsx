import { useLocation } from 'react-router-native'
import StyledText from '../components/StyledText'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import theme from '../theme'

const ItemCard = ({ header, body, smallBody }) => <View style={styles.cardContainer}>
    <StyledText style={{ paddingBottom: 5 }} color='secondary'>{header}</StyledText>
    <StyledText fontWeight={smallBody || 'bold'} fontSize={smallBody || 'subheading'}>{body}</StyledText>
</View>

const Word = () => {
    const { pathname } = useLocation()
    const id = pathname.split('/')[2]
    const words = useSelector(store => store.words)
    const item = words.find(item => item.word === id)
    
    return <ScrollView style={styles.container}>
        <ItemCard header='Inglés' body={item.word} />
        <ItemCard header='Español' body={item.spanishTranslation} />
        <ItemCard header='Primer proposición' body={item.firstSentence} smallBody />
        <ItemCard header='Segunda proposición' body={item.secondSentence} smallBody />
        <ItemCard header='Tercer proposición' body={item.thirdSentence} smallBody />
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    cardContainer: {
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.secondary,
        paddingHorizontal: 10,
        paddingVertical: 20,
    }
})

export default Word