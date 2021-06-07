import Storage from '../utils/storage'
import filterTypes from '../utils/filterTypes'

const key = 'filter'
const defaultValue = 0

export const getFilters = () => {
  return filterTypes
}

export const getFilter = () => {
  return tryParseString(Storage.get(key))
}

export const setFilter = (theme) => {
  Storage.set(key, theme)
}

const tryParseString = (string) => {
  const indexFilter = filterTypes.findIndex((item) => item === string)

  if (indexFilter !== -1) {
    return filterTypes[indexFilter]
  }

  const newFilter = filterTypes[defaultValue]

  setFilter(newFilter)
  return filterTypes[newFilter]
}
