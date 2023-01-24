import { TouchableWithoutFeedback } from 'react-native'
import { SvgXml } from 'react-native-svg'
import styled, { useTheme } from 'styled-components/native'
import SearchIcon from './icons/SearchIcon'
import { useState, useRef } from 'react'
import { SubjectManager } from '../models/subjectmanager'

export const searchSavedSubject$ = new SubjectManager()

const SearchSavedTab = () => {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState('')
    const theme = useTheme()
    const inputRef = useRef()
    
    const handleClick = () => {
        setActive(true)
        inputRef.current.focus()
    }
    
    const handleChange = inputValue => {
        setValue(inputValue)
        searchSavedSubject$.setSubject(inputValue.toLowerCase())
    }

    const handleBlur = () => setActive(false)

    return <>
        <StyledInput
            onChangeText={handleChange}
            onBlur={handleBlur}
            value={value}
            style={active && { display: 'flex' }}
            ref={inputRef}
        />
        <TouchableWithoutFeedback onPress={handleClick}>
            <ButtonWrapper>
                <SvgXml xml={SearchIcon(theme.colors.secondary)} width={20} height={20} />
            </ButtonWrapper>
        </TouchableWithoutFeedback>
    </>
}

const StyledInput = styled.TextInput`
    display: none;
    width: 100px;
    color: ${({ theme }) => theme.colors.textSecondary};
    padding: 5px 10px;
    margin-left: -37px;
    marginTop: -10px;
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
    border-bottom-width: 1px;
`

const ButtonWrapper = styled.View`
    padding: 0 10px 10px 10px;
`

export default SearchSavedTab