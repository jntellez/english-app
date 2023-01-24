import { FlatList } from 'react-native'
import WordItem from './WordItem'
import { useSelector } from 'react-redux'
import { useTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import { searchHomeSubject$ } from './SearchTab'

const WordsList = () => {
    const [value, setValue] = useState('')
    const theme = useTheme()
    const data = useSelector(store => store.words)
    const filteredData = data.filter(item => item.word.includes(value))

    useEffect(() => {
        searchHomeSubject$.getSubject().subscribe(value => setValue(value))
    }, [])
    

    return <FlatList
        data={filteredData.length > 0 ? filteredData : data}
        renderItem={({ item: word }) => <WordItem { ...word } />}
        style={{ backgroundColor: theme.colors.background }}
    />
}

export default WordsList