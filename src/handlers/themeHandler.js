import Storage from '../utils/storage'
import colors from '../Themes/colors'

const key = 'theme'
const defaultValue = colors.purple

export const getThemes = () => {
  return Object.keys(colors)
}

export const getTheme = () => {
  const result = tryParseJSON(Storage.get(key))
  return result
}

export const setTheme = (value) => {
  if (value && typeof value === 'object') {
    Storage.set(key, JSON.stringify(value))
  } else {
    const themes = getThemes()
    const theme = themes.find((item) => item === value)
    if (theme) {
      Storage.set(key, JSON.stringify(colors[value]))
    }
  }
}

const tryParseJSON = (string) => {
  console.log('tryParseJSON')



  try {
    const result = JSON.parse(string)

    if (result && typeof result === 'object') {
      return result
    }
  } catch (e) {}

  setTheme(defaultValue)

  return defaultValue
}
