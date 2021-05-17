import React from 'react'

import { ThemeProvider } from 'styled-components'

const Theme = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
