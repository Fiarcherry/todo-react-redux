import Storage from '../utils/storage'
import colors from '../Themes/colors'
import fonts from '../Themes/fonts'

const key = 'theme'
const defaultColor = colors.purple
const defaultFont = fonts.comicSans
const defaultValue = { colors: defaultColor, fonts: defaultFont }

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
      const newValue = { colors: colors[value], fonts: defaultFont }
      Storage.set(key, JSON.stringify(newValue))
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
