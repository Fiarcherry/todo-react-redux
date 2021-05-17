import React from 'react'

import Button from '../Button'
import Container from '../Container'

import { purple, green } from '../../Themes/colors'

const ThemeSelector = ({ changeTheme }) => {
  return (
    <Container justifyContent="center">
      <Button title="Purple" onClick={() => changeTheme(purple)} />
      <Button title="Green" onClick={() => changeTheme(green)} />
    </Container>
  )
}

export default ThemeSelector
