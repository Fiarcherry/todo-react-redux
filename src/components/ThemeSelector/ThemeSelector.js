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

    const handleChange = (e) => {
      console.log('channel', e.data)
      onThemeChange()
    }

    setTheme(themeData)
    onThemeChange()

    const channel = new BroadcastChannel('theme')
    channel.postMessage('test')

    channel.addEventListener('message', (e) => handleChange(e))

    return () => {
      channel.removeEventListener('message', handleChange)
      channel.close()
    }
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
