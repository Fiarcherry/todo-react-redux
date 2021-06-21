import React from 'react'
import { connect } from 'react-redux'

import {
  selectDoneTodosCount,
  selectNotDoneTodosCount,
} from '../../redux/selectors/todosSelectors'

import { Text } from './styles'

const TodosLeft = ({ doneCount, notDoneCount }) => {
  return (
    <Text>
      {notDoneCount} more to do, {doneCount} done
    </Text>
  )
}

const mapStateToProps = (state) => ({
  doneCount: selectDoneTodosCount(state),
  notDoneCount: selectNotDoneTodosCount(state),
})

export default connect(mapStateToProps)(TodosLeft)
