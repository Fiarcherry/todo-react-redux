import React, { useCallback } from 'react'
import { GlobalStyle } from '../App/styles'

import { StyledPopUp, StyledPopUpContent } from './styles'

const PopUp = ({
  active = true,
  setActive,
  handleClose,
  prevColors,
  children,
}) => {
  //const [active, setActive] = useState(true)

  const handleContentClick = useCallback((e) => e.stopPropagation(), [])

  const handleOutsideClick = useCallback(() => {
    if (active !== false) {
      handleClose(prevColors)
      setActive(false)
    }
  }, [active, prevColors, setActive, handleClose])

  return (
    <>
      <GlobalStyle hidden={active} />
      <StyledPopUp active={active} onClick={handleOutsideClick}>
        <StyledPopUpContent active={active} onClick={handleContentClick}>
          {children}
        </StyledPopUpContent>
      </StyledPopUp>
    </>
  )
}

export default PopUp
