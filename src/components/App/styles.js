import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ hidden }) => (hidden ? 'hidden' : 'unset')};
  }
`
export { GlobalStyle }
