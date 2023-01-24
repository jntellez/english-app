import { FlatList } from 'react-native'
import WordItem from './WordItem'
import { useSelector } from 'react-redux'
import { useTheme } from 'styled-components'
import { sujeto } from './SearchTab'

const FilteredList = () => {
    const theme = useTheme()
    const data = useSelector(store => store.filtered)
    
    return <FlatList
        data={data}
        renderItem={({ item: word }) => <WordItem { ...word } />}
        style={{ backgroundColor: theme.colors.background }}
    />
}

export default FilteredList