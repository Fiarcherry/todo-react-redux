import React from 'react'
import { StyledSpace } from './styles.js'

const Space = ({ margin = '10px 10px' }) => {
  return <StyledSpace margin={margin}></StyledSpace>
}

export default React.memo(Space)
