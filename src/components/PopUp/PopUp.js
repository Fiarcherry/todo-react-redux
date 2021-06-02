import React from 'react'
import { GlobalStyle } from '../App/styles'

import { StyledPopUp, StyledPopUpContent } from './styles'

const PopUp = ({ active = true, setActive, children }) => {

  return (
    <React.Fragment>
      <GlobalStyle hidden={active} />
      <StyledPopUp active={active} onClick={() => setActive(false)}>
        <StyledPopUpContent
          active={active}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </StyledPopUpContent>
      </StyledPopUp>
    </React.Fragment>
  )
}

export default PopUp
