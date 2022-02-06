import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @fontface {
        font-family: 'Poppins';
        src: url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400&display=swap')
    }
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
        background-color: ${props => props.theme.bodyColor};
        color: ${props => props.theme.fontColor};
        font-family: ${props => props.theme.fontFamily};
        
        #__next {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            min-height: 100vh;
        }
    }

    h1, h2, h3, h4, h5, p, a, button {
        line-height: 1;
        margin: 0;
        padding: 0;
    }

    a {
        color: ${props => props.theme.linkColor};
        text-decoration-color: ${props => props.theme.linkColor};
    }

    button {
        font-family: ${props => props.theme.fontFamily};
        cursor: pointer;
        background: transparent;
    }

`

export default GlobalStyles
