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
}) => {
  // return (
  //   <StyledButton buttonType={buttonType} isActive={isActive}>
  //     {title}
  //     {children}
  //   </StyledButton>
  // )
  switch (buttonType) {
    case 'filter':
      return (
        <StyledFilterButton isActive={isActive}>{title}</StyledFilterButton>
      )
    case 'icon':
      return <StyledIconButton>{children}</StyledIconButton>
    case 'checked':
      return <StyledCheckedButton>{children}</StyledCheckedButton>

    default:
      return (
        <StyledButton isActive={isActive}>
          {title}
          {children}
        </StyledButton>
      )
  }
}

export default Button
