import styled from 'styled-components'

const Item = styled.span`
  color: ${(props) => (props.important ? 'tomato' : 'black')};
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
  font-style: ${(props) => (props.done ? 'italic' : 'normal')};
`

const Label = styled.span`
  font-family: 'Comic Sans MS', cursive, sans-serif;
  cursor: pointer;
`

const Button = styled.button`
  margin: 3px;
  padding: 3px;
  border: 3px solid #9696dc;
  border-radius: 5px;
  background-color: #ffffff;
  cursor: pointer;
  transition: 100ms ease-in-out;

  &:hover {
    background-color: #9696dc;
  }
`

const DeleteButton = styled(Button)``

const ImportantButton = styled(Button)``

export { Item, Label, DeleteButton, ImportantButton }
