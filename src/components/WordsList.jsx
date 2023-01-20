import { FlatList } from 'react-native'
import WordItem from './WordItem'
import { useSelector } from 'react-redux'

const WordsList = () => {
    const data = useSelector(store => store.words)
    return <FlatList
        data={data}
        renderItem={({ item: word }) => <WordItem {...word} />}
    />
}

export default WordsList