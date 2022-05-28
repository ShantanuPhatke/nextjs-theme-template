import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html,
    body {
        padding: 0;
        margin: 0;
        width: 100%;
    }
    body {
        background-color: ${props => props.theme.color.background};
        color: ${props => props.theme.color.text};
        font-family: ${props => props.theme.font.base};
        font-size: 1.25rem;
        
        #__next {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            min-height: 100vh;
        }
    }

    h1, h2, h3, h4, h5, p, a, button {
        line-height: 1.5;
        margin: 0;
        padding: 0;
    }

    a {
        color: ${props => props.theme.color.link};
        text-decoration-color: currentColor;
    }

    button {
        line-height: 1;
        font-family: ${props => props.theme.font.base};
        cursor: pointer;
        background: transparent;
    }

`

export default GlobalStyles
