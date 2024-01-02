import { FlatList } from 'react-native'
import WordItem from './WordItem'
import { useSelector } from 'react-redux'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import { searchHomeSubject$ } from './SearchTab'
import { applyFilters, longer, reverseArray, sortByAlphabet } from '../utils/filterArray'

const WordsList = () => {
    const [value, setValue] = useState('')
    const theme = useTheme()
    const data = useSelector(store => store.words)
    const { sortFilter, longerFilter, reverseFilter } = useSelector(store => store.settings)
    
    useEffect(() => {
        searchHomeSubject$.getSubject().subscribe(value => setValue(value))
    }, [])

    const emptyFunction = data => data

    const filters = [
        sortFilter ? sortByAlphabet : emptyFunction,
        longerFilter ? longer : emptyFunction,
        reverseFilter ? reverseArray : emptyFunction
    ]
    
    const selectedFilter = applyFilters(...filters)
    
    const filteredData = selectedFilter(data).filter(item => item.word.includes(value))
    
    return <FlatList
        data={filteredData}
        renderItem={({ item: word }) => <WordItem { ...word } />}
        style={{ backgroundColor: theme.colors.background }}
    />
}

export default WordsList