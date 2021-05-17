import React from 'react'

import Button from '../Button'
import Container from '../Container'

import { purple, green, orange } from '../../Themes/colors'

const ThemeSelector = ({ changeTheme }) => {
  return (
    <Container justifyContent="center">
      <Button title="Purple" onClick={() => changeTheme(purple)} />
      <Button title="Green" onClick={() => changeTheme(green)} />
      <Button title="Orange" onClick={() => changeTheme(orange)} />
    </Container>
  )
}

export default ThemeSelector
