import { createGlobalStyle, ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import { Normalize } from 'styled-normalize'
import colors from './colors'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

:root {
  --primary: var(${({theme}) => theme.colors.blue08}, #4513FE);
  --secondary: var(${({theme}) => theme.colors.yellow06}, #FFCC00);
  --black: var(${({theme}) => theme.colors.gray09}, #334A5E);
  --white: white;
  --danger: var(${({theme}) => theme.colors.gray09}, #334A5E);

  --font-family: 'Poppins', sans-serif;
}

body {
  font-family: var(--font-family, Poppins), sans-serif;
}
`

const theme = {
  colors,
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyles />
    {children}
  </ThemeProvider>
)

Theme.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Theme
