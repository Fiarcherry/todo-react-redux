import React from 'react'

import { StyledInput } from './styles'

const Input = ({
  type = 'text',
  placeholder = 'Введите текст',
  onChange,
  value,
  label = 'hth',
  styles = {},
}) => {
  const inputDefaultStyles = {
    flexGrow: '1',
    margin: 'unset',
    padding: 'unset',
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
      label={label}
      {...allStyles}
    ></StyledInput>
  )
}

export default Input
