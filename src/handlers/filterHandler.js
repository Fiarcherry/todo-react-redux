import filters from '../assets/filters'

const key = 'filter'
const defaultValue = 0

export const getFilters = () => {
  return filters
}

export const getFilter = () => {
  return tryParseString(localStorage.getItem(key))
}

export const setFilter = (theme) => {
  localStorage.setItem(key, theme)
}

const tryParseString = (string) => {
  const indexFilter = filters.findIndex((item) => item === string)

  if (indexFilter !== -1) {
    return filters[indexFilter]
  }

  const newFilter = filters[defaultValue]

  setFilter(newFilter)
  return filters[newFilter]
}
