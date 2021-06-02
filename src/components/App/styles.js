import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.hidden ? 'hidden' : 'unset')};
  }
`
export { GlobalStyle }
