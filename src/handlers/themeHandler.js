import Storage from '../utils/storage'
import colors from '../utils/Theme/colors'
import fonts from '../utils/Theme/fonts'

const key = 'theme'
const defaultColor = colors.purple
const defaultFont = fonts.comicSans
const defaultValue = { colors: defaultColor, fonts: defaultFont }

export const getColors = () => {
  return Object.keys(colors)
}

export const getTheme = () => {
  const result = tryParseJSON(Storage.get(key))
  return result
}

export const setTheme = (newTheme) => {
  if (newTheme && typeof newTheme === 'object') {
    Storage.set(key, JSON.stringify(newTheme))
  } else {
    const themes = getColors()
    const theme = themes.find((item) => item === newTheme)
    if (theme) {
      const newValue = { colors: colors[newTheme], fonts: defaultFont }
      Storage.set(key, JSON.stringify(newValue))
    }
  }
}

const tryParseJSON = (string) => {
  try {
    const result = JSON.parse(string)

    if (result && typeof result === 'object') {
      return result
    }
  } catch (e) {}

  setTheme(defaultValue)

  return defaultValue
}
