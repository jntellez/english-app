import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import LeftArrowIcon from "./icons/LeftArrowIcon"
import { SvgXml } from "react-native-svg"
import theme from "../theme"
import { useHistory } from "react-router-native"

const PrevPageButton = () => {
    const history = useHistory()
    
    const handleClick = () => history.goBack()

    return <TouchableWithoutFeedback onPress={handleClick}>
        <View style={styles.container}>
            <SvgXml xml={LeftArrowIcon(theme.colors.secondary)} width={15} height={15} />
        </View>
    </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        marginTop: -7,
        marginLeft: -15
    }
})

export default PrevPageButton