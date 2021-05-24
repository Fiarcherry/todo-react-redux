import withButtonStyle from '../../../../hocs/withButtonStyle'
import Button from '../index'

import { StyledButton } from './styles'

const FilterButton = (props) => {
  return (
    <StyledButton>
      {withButtonStyle('filter', { ...props })(Button)}
    </StyledButton>
  )
}

export default FilterButton
