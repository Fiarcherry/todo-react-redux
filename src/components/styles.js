import styled from 'styled-components'

const Input = styled.input``

const Button = styled.button``

const DeleteButton = styled(Button)``

const ImportantButton = styled(Button)``

const Item = styled.span`
  color: ${(props) => (props.important ? 'tomato' : 'black')};
`

export { Input, DeleteButton, ImportantButton, Item }