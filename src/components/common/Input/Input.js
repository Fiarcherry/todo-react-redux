import React from 'react'

import { StyledInput } from './styles'

const Input = ({
  type = 'text',
  placeholder = 'Введите текст',
  onChange,
  value,
  styles = {},
}) => {
  const inputDefaultStyles = {
    flexGrow: '1',
    margin: 'unset',
    padding: '10px 20px',
    width: '100%',
  }

  const { ...allStyles } = {
    ...inputDefaultStyles,
    ...styles,
  }

  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      {...allStyles}
    ></StyledInput>
  )
}

export default Input
