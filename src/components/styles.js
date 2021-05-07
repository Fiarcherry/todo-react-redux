import styled from 'styled-components'

const Item = styled.span`
  color: ${(props) => (props.important ? 'tomato' : 'black')};
`

export { Item }
