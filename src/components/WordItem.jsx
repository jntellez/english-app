import { TouchableWithoutFeedback } from 'react-native'
import StyledText from './StyledText'
import { Link } from 'react-router-native'
import SavedButton from './SavedButton'
import { useSelector } from 'react-redux'
import styled from 'styled-components/native'

const WordItem = (item) => {
    const { hideTranslation } = useSelector(store => store.settings)

    return <Link to={`/word/${item.word}`} component={TouchableWithoutFeedback}>
        <Container>
            <StyledText style={{ padding: 20 }}>{item.word}</StyledText>
            {!hideTranslation && <StyledText style={{ padding: 20 }} color='secondary'>{item.spanishTranslation}</StyledText>}
            <SavedButton item={item} />
        </Container>
    </Link>
}

const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    margin: 0 10px;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
`

export default WordItem