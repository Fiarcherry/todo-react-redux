import React from 'react'

import { Text } from './styles'

const TodosLeft = ({ toDo, done }) => {
  return (
    <Text>
      {toDo} more to do, {done} done
    </Text>
  )
}

export default TodosLeft
