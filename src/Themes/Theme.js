import React from 'react'

import { purple, green } from './colors'

import { ThemeProvider } from 'styled-components'

const Theme = ({ children }) => (
  <ThemeProvider theme={green}>{children}</ThemeProvider>
)

export default Theme
