import styled from 'styled-components'

const Button = styled.button``

const DeleteButton = styled(Button)``

const ImportantButton = styled(Button)``

const Item = styled.span`
  color: ${(props) => (props.important ? 'tomato' : 'black')};
`

export { DeleteButton, ImportantButton, Item }
