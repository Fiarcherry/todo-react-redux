import withButtonStyle from '../../../../hocs/withButtonStyle'
import Button from '../index'

const IconButton = (props) => {
  return <div>{withButtonStyle('icon', { ...props })(Button)}</div>
}

export default IconButton
