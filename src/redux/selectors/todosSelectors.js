import { createSelector } from 'reselect'

export const selectTodos = ({ todos }) => todos
export const selectVisible = ({ visible }) => visible
export const selectFilter = ({ filter }) => filter
export const selectQuery = ({ query }) => query
export const selectPage = ({ page }) => page

export const selectDoneTodosCount = createSelector(
  selectTodos,
  (todos) => todos.filter((item) => item.done).length
)

export const selectNotDoneTodosCount = createSelector(
  selectTodos,
  (todos) => todos.filter((item) => !item.done).length
)

export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  ([...todos], filter) => {
    // console.log('filter', todos)
    switch (filter) {
      case 'all':
        return todos

      case 'active':
        return todos.filter((item) => !item.done)

      case 'done':
        return todos.filter((item) => item.done)

      default:
        return todos
    }
  }
)

export const selectFilteredSearchedByQueryTodos = createSelector(
  [selectFilteredTodos, selectQuery],
  (todos, query) => {
    // console.log('query', todos)
    if (query.length === 0) {
      return todos
    }

    return todos.filter((item) => {
      return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
    })
  }
)

export const selectFilteredSearchedByQuerySortedTodos = createSelector(
  selectFilteredSearchedByQueryTodos,
  (todos) => {
    // console.log('sort', todos)
    return todos.sort((a, b) => {
      const aValue = calcSortOrder(a.done, a.important)
      const bValue = calcSortOrder(b.done, b.important)

      if (aValue === bValue) {
        return a.label > b.label ? 1 : a.label < b.label ? -1 : 0
      } else {
        return aValue > bValue ? 1 : -1
      }
    })
  }
)

export const selectItemsPerPage = () => 10

export const selectPagesCount = createSelector(
  [selectFilteredSearchedByQuerySortedTodos, selectItemsPerPage],
  (todos, itemsPerPage) => {
    const pagesCount = calcPagesCount(todos.length, itemsPerPage)
    // console.log('pagesCount', pagesCount)

    return pagesCount
  }
)

export const selectFilteredSearchedByQuerySortedOnPageTodos = createSelector(
  [
    selectFilteredSearchedByQuerySortedTodos,
    selectPagesCount,
    selectItemsPerPage,
    selectPage,
  ],
  (todos, pagesCount, itemsPerPage, page) => {
    const todosOnPages = calcTodosOnPages(todos, pagesCount, itemsPerPage)

    let result = []

    if (todosOnPages[page]) {
      result = todosOnPages[page].map((item) => item)
    }

    // console.log('pages', result)

    return result
  }
)

export const selectVisibleTodos = createSelector(
  [selectFilteredSearchedByQuerySortedOnPageTodos],
  (todos) => {
    // console.log('visible', todos)
    return todos
  }
)
// const visibleItems = sort(search(filterTodos([...todos], filter), query))

const calcSortOrder = (valueDone, valueImportant) => {
  return `${Number(valueDone)}${Number(!valueImportant)}`
}

const calcPagesCount = (items, perPage) => {
  let result = Math.floor(items / perPage)

  if (items % perPage !== 0) {
    result++
  }

  return result
}

const calcTodosOnPages = (todos, pagesCount, itemsPerPage) => {
  let result = []
  // console.log(todos.length)
  // console.log(pages)
  // console.log(itemsPerPage)

  // const itemsLeft = pagesCount * itemsPerPage - todos.length
  // console.log('itemsLeft', itemsLeft)

  for (let i = 0; i < pagesCount; i++) {
    let itemsOnPage = []

    for (let j = 0; j < itemsPerPage; j++) {
      const item = todos[i * itemsPerPage + j]
      // if (item !== undefined) {
      itemsOnPage.push(item)
      // }
    }

    result.push(itemsOnPage)
  }

  const lastPage = result.length - 1

  if (result[lastPage]) {
    result[lastPage] = result[lastPage].filter((item) => item !== undefined)
  }

  // console.log(result)

  return result
}

// const shallowEqual = (object1, object2) => {
//   const keys1 = Object.keys(object1)
//   const keys2 = Object.keys(object2)

//   if (keys1.length !== keys2.length) {
//     return false
//   }

// console.log('length pass')

//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false
//     }
//   }

// console.log('equal pass')

//   return true
// }
