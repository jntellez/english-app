import { StyleSheet, Text } from 'react-native'
import theme from '../theme'

const StyledText = ({ children, color, fontSize, fontWeight, align, style, ...restOfProps }) => {
    const textStyles = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        color === 'white' && styles.white,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textAlignCenter,
        style
    ]
    
    return <Text style={textStyles} {...restOfProps}>
        {children}
    </Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        color: theme.colors.textPrimary,
        fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    white: {
        color: theme.colors.white
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    textAlignCenter: {
        textAlign: 'center'
    }
})

export default StyledText