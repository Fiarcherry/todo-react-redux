import withButtonStyle from '../../../../hocs/withButtonStyle'
import Button from '../index'

const CheckedButton = (props) => {
  return <div>{withButtonStyle('checked', { ...props })(Button)}</div>
}

export default CheckedButton
