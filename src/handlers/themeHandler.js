import colors from '../Themes/colors'

const key = 'theme'
const defaultValue = 0

export const getThemes = () => {
  return Object.keys(colors)
}

export const getTheme = () => {
  return tryParseString(localStorage.getItem(key))
}

export const setTheme = (theme) => {
  localStorage.setItem(key, theme)
}

const tryParseString = (string) => {
  const themes = getThemes()

  const theme = themes.find((item) => item === string)

  if (theme) {
    return colors[theme]
  }

  const newTheme = themes[defaultValue]
  
  setTheme(newTheme)
  return colors[newTheme]
}
