import React from 'react'

import { StyledPopUp, StyledPopUpContent } from './styles'

const PopUp = ({ active = true, setActive, children }) => {

  return (
    <StyledPopUp active={active} onClick={() => setActive(false)}>
      <StyledPopUpContent active={active} onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledPopUpContent>
    </StyledPopUp>
  )
}

export default PopUp
