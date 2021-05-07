import React from 'react'
import { Item } from './styles'

const TodoListItem = ({ label, important = false }) => {
  return <Item important={important}>{label}</Item>
}

export default TodoListItem
