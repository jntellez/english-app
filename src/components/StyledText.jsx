import { useTheme } from 'styled-components'
import styled from 'styled-components/native'

const StyledText = ({ children, color, fontSize, fontWeight, align, style, ...restOfProps }) => {
    const theme = useTheme()
    const textStyles = [
        color === 'primary' && { color: theme.colors.primary },
        color === 'secondary' && { color: theme.colors.textSecondary },
        color === 'white' && { color: theme.colors.white },
        fontSize === 'subheading' && { fontSize: theme.fontSizes.subheading },
        fontWeight === 'bold' && { fontWeight: theme.fontWeights.bold },
        align === 'center' && { textAlign: 'center' },
        style
    ]
    
    return <TextStyled align={align} style={textStyles} {...restOfProps}>
        {children}
    </TextStyled>
}

const TextStyled = styled.Text`
    font-size: ${({ theme }) => theme.fontSizes.body};
    font-family: ${({ theme }) => theme.fonts.main};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.textPrimary};
`

export default StyledText