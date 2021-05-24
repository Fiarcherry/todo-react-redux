import React from 'react'

import { StyledListElement } from './styles'

const ListElement = ({ children, last }, key) => {
  return (
    <StyledListElement last={last} key={key}>
      {children}
    </StyledListElement>
  )
}

export default ListElement
