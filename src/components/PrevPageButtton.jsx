import { TouchableWithoutFeedback } from "react-native"
import LeftArrowIcon from "./icons/LeftArrowIcon"
import { SvgXml } from "react-native-svg"
import { useHistory } from "react-router-native"
import { useTheme } from "styled-components"
import styled from "styled-components/native"

const PrevPageButton = () => {
    const history = useHistory()
    const theme = useTheme()
    
    const handleClick = () => history.goBack()

    return <TouchableWithoutFeedback onPress={handleClick}>
        <Container>
            <SvgXml xml={LeftArrowIcon(theme.colors.secondary)} width={15} height={15} />
        </Container>
    </TouchableWithoutFeedback>
}

const Container = styled.View`
    padding: 8px;
    margin-top: -7px;
    margin-left: -15px;
`

export default PrevPageButton