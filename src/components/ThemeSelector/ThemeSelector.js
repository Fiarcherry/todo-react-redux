import React, { useEffect, useState } from 'react'

import Button from '../common/Button'
import Container from '../common/Container'

import { getTheme, getThemes, setTheme } from '../../handlers/themeHandler'

const ThemeSelector = ({ onThemeChange }) => {
  const [themeData, setThemeData] = useState(getTheme())
  console.log('themeComponentData', themeData)

  const handleThemeChange = (theme) => {
    setThemeData(theme)
  }

  useEffect(() => {
    console.log('useTheme')


    setTheme(themeData)
    onThemeChange()

  }, [themeData, onThemeChange])

  const elements = getThemes().map((item, index) => {
    const title = item[0].toUpperCase() + item.slice(1)

    return (
      <Button
        key={index}
        title={title}
        onClick={() => handleThemeChange(item)}
      />
    )
  })

  return <Container justifyContent="center">{elements}</Container>
}

export default ThemeSelector
