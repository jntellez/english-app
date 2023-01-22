import { useLocation } from 'react-router-native'
import StyledText from '../components/StyledText'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'
import { useIntl } from 'react-intl'

const ItemCard = ({ header, body, smallBody }) => <CardContainer>
    <StyledText style={{ paddingBottom: 5 }} color='secondary'>{header}</StyledText>
    <StyledText fontWeight={smallBody || 'bold'} fontSize={smallBody || 'subheading'}>{body}</StyledText>
</CardContainer>

const Word = () => {
    const { pathname } = useLocation()
    const id = pathname.split('/')[2]
    const words = useSelector(store => store.words)
    const item = words.find(item => item.word === id)
    const intl = useIntl()
    const { WORD_HEAD_ENGLISH, WORD_HEAD_SPANISH, WORD_HEAD_FIRST_SENTENCE, WORD_HEAD_SECOND_SENTENCE, WORD_HEAD_THIRD_SENTENCE } = intl.messages
    
    return <Container>
        <ItemCard header={WORD_HEAD_ENGLISH} body={item.word} />
        <ItemCard header={WORD_HEAD_SPANISH} body={item.spanishTranslation} />
        <ItemCard header={WORD_HEAD_FIRST_SENTENCE} body={item.firstSentence} smallBody />
        <ItemCard header={WORD_HEAD_SECOND_SENTENCE} body={item.secondSentence} smallBody />
        <ItemCard header={WORD_HEAD_THIRD_SENTENCE} body={item.thirdSentence} smallBody />
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