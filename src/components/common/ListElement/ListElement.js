import React from 'react'
import { StyledListElement } from './styles'

const ListElement = ({ children }, key) => {
  return <StyledListElement key={key}>{children}</StyledListElement>
}

export default ListElement
