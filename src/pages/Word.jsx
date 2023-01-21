import { useLocation } from 'react-router-native'
import StyledText from '../components/StyledText'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

const ItemCard = ({ header, body, smallBody }) => <CardContainer>
    <StyledText style={{ paddingBottom: 5 }} color='secondary'>{header}</StyledText>
    <StyledText fontWeight={smallBody || 'bold'} fontSize={smallBody || 'subheading'}>{body}</StyledText>
</CardContainer>

const Word = () => {
    const { pathname } = useLocation()
    const id = pathname.split('/')[2]
    const words = useSelector(store => store.words)
    const item = words.find(item => item.word === id)
    
    return <Container>
        <ItemCard header='Inglés' body={item.word} />
        <ItemCard header='Español' body={item.spanishTranslation} />
        <ItemCard header='Primer proposición' body={item.firstSentence} smallBody />
        <ItemCard header='Segunda proposición' body={item.secondSentence} smallBody />
        <ItemCard header='Tercer proposición' body={item.thirdSentence} smallBody />
    </Container>
}

const Container = styled.ScrollView`
    flex: 1;
    padding: 0 10px;
    background-color: ${({ theme }) => theme.colors.background};
`

const CardContainer = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
    padding: 20px 10px;
`

export default Word