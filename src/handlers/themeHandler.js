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
    // const newValue = { colors: value, fonts: defaultFont }
    // console.log(value)
    // console.log(newValue)
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
  // const themes = getThemes()
  // console.log('tryParseJSON')

  // const theme = themes.find((item) => item === string)
  // console.log('theme', theme)

  // if (theme) {
  //   console.log('colors[theme]', colors[theme])

  //   return colors[theme]
  // }

  // const newTheme = themes[defaultValue]

  // console.log('newTheme', newTheme)
  // console.log('colors[newTheme]', colors[newTheme])

  // setTheme(newTheme)
  // return colors[newTheme]

  try {
    const result = JSON.parse(string)

    if (result && typeof result === 'object') {
      return result
    }
  } catch (e) {}

  setTheme(defaultValue)

  return defaultValue
}
