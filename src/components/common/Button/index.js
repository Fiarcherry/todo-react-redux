import React from 'react'
import {
  StyledButton,
  StyledCheckedButton,
  StyledFilterButton,
  StyledIconButton,
} from './styles'

const Button = ({
  title = 'Button',
  isActive = false,
  buttonType = '',
  children,
  onClick,
  ...props
}) => {
  const handleIsActiveClick = () => isActive || onClick()

  // return (
  //   <StyledButton buttonType={buttonType} isActive={isActive}>
  //     {title}
  //     {children}
  //   </StyledButton>
  // )

  switch (buttonType) {
    case 'filter':
      return (
        <StyledFilterButton
          isActive={isActive}
          onClick={handleIsActiveClick}
          {...props}
        >
          {title}
          {children}
        </StyledFilterButton>
      )
    case 'icon':
      return (
        <StyledIconButton onClick={onClick} {...props}>
          {children}
        </StyledIconButton>
      )
    case 'checked':
      return (
        <StyledCheckedButton onClick={onClick} {...props}>
          {children}
        </StyledCheckedButton>
      )

    default:
      return (
        <StyledButton
          isActive={isActive}
          onClick={handleIsActiveClick}
          {...props}
        >
          {title}
          {children}
        </StyledButton>
      )
  }
}

export default React.memo(Button)
