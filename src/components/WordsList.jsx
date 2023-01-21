import { FlatList } from 'react-native'
import WordItem from './WordItem'
import { useSelector } from 'react-redux'
import { useTheme } from 'styled-components'


const WordsList = () => {
    const data = useSelector(store => store.words)
    const theme = useTheme()

    return <FlatList
        data={data}
        renderItem={({ item: word }) => <WordItem {...word} />}
        style={{ backgroundColor: theme.colors.background }}
    />
}

export default WordsList