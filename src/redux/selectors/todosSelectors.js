import { createSelector } from 'reselect'

export const selectTodos = ({ todos }) => todos
export const selectFilter = ({ filter }) => filter
export const selectQuery = ({ query }) => query
export const selectPage = ({ page }) => page

export const selectItemsPerPage = () => 10

export const selectDoneTodosCount = createSelector(
  selectTodos,
  (todos) => todos.filter((item) => item.done).length
)

export const selectNotDoneTodosCount = createSelector(
  selectTodos,
  (todos) => todos.filter((item) => !item.done).length
)

const selectSortedTodos = createSelector(selectTodos, ([...todos]) => {
  const result = todos.sort((a, b) => {
    const aValue = calcSortOrder(a.done, !a.important)
    const bValue = calcSortOrder(b.done, !b.important)

    if (aValue === bValue) {
      return a.label > b.label ? 1 : a.label < b.label ? -1 : 0
    } else {
      return aValue > bValue ? 1 : -1
    }
  })

  return result
})

const selectFilteredTodos = createSelector(
  [selectSortedTodos, selectFilter],
  (todos, filter) => {
    const result = applyFilter(todos, filter)

    return result
  }
)

const selectSearchedByQueryTodos = createSelector(
  [selectFilteredTodos, selectQuery],
  (todos, query) => {
    const result = applyQuery(todos, query)

    return result
  }
)

export const selectPagesCount = createSelector(
  [selectSearchedByQueryTodos, selectItemsPerPage],
  (todos, itemsPerPage) => {
    const pagesCount = calcPagesCount(todos.length, itemsPerPage)

    return pagesCount
  }
)

const selectOnPageTodos = createSelector(
  [
    selectSearchedByQueryTodos,
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

    return result
  }
)

export const selectVisibleTodos = createSelector(
  [selectOnPageTodos],
  (todos) => {

    return todos
  }
)

const applyQuery = (todos, query) => {
  if (query.length === 0) {
    return todos
  }

  return todos.filter((item) => {
    return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
  })
}

const applyFilter = (todos, filter) => {
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

const calcSortOrder = (...args) => {
  let result = ''

  for (let i = 0; i < args.length; i++) {
    result = result.concat(Number(args[i]))
  }

  return result
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

  for (let i = 0; i < pagesCount; i++) {
    let itemsOnPage = []

    for (let j = 0; j < itemsPerPage; j++) {
      const item = todos[i * itemsPerPage + j]
      itemsOnPage.push(item)
    }

    result.push(itemsOnPage)
  }

  const lastPage = result.length - 1

  if (result[lastPage]) {
    result[lastPage] = result[lastPage].filter((item) => item !== undefined)
  }

  return result
}