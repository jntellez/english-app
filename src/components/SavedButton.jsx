import { TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addSaved } from '../redux/states/saved'
import { SvgXml } from 'react-native-svg'
import StarIcon from './icons/StarIcon'
import theme from '../theme'
import { getPageName } from '../utils/utils'

const SavedButton = ({ item, style, ...restOfProps }) => {
    const dispatch = useDispatch()
    const pageName = getPageName()
    const savedWords = useSelector(store => store.saved)

    const findWord = !!savedWords.find(w => w.word === item.word)
    const filterWords = savedWords.filter(w => w.word !== item.word)

    const handleClick = () => {
        const filteredWords = findWord ? filterWords : [...savedWords, item]
        dispatch(addSaved(filteredWords))
    }

    const stylesButton = [
        { color: findWord && pageName === 'word' || !findWord ? theme.colors.secondary : theme.colors.textSecondary },
        { padding: pageName === 'word' ? 10 : 20 },
        style
    ]
    
    return <TouchableWithoutFeedback onPress={handleClick}>
        <View style={stylesButton} {...restOfProps}>
            <SvgXml xml={StarIcon(stylesButton[0].color, findWord)} width={20} height={20}/>
        </View>
    </TouchableWithoutFeedback>
}

export default SavedButton