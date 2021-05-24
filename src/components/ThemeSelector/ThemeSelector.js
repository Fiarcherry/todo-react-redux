import React from 'react'

import Button from '../common/Button'
import Container from '../common/Container'

import { getThemes } from '../../handlers/themeHandler'

const ThemeSelector = ({ changeTheme }) => {
  const elements = getThemes().map((item, index) => {
    const title = item[0].toUpperCase() + item.slice(1)

    return (
      <Button key={index} title={title} onClick={() => changeTheme(item)} />
    )
  })

  return <Container justifyContent="center">{elements}</Container>
}

export default ThemeSelector
