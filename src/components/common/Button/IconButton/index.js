import React from 'react'

import withButtonStyle from '../../../../utils/hocs/withButtonStyle'
import Button from '../index'

const IconButton = (props) => {
  const type = 'icon'
  return <div>{withButtonStyle(type, { ...props })(Button)}</div>
}

export default IconButton
