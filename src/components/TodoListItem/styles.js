import styled from 'styled-components'

const Item = styled.span`
  color: ${(props) => (props.important ? 'tomato' : 'black')};
  font-weight: ${(props) => (props.important ? 'bold' : 'normal')};
  text-decoration: ${(props) => (props.done ? 'line-through' : 'none')};
  font-style: ${(props) => (props.done ? 'italic' : 'normal')};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Label = styled.span`
  font-family: 'Comic Sans MS', cursive, sans-serif;
  cursor: pointer;

  flex-grow: 1;
  overflow-wrap: anywhere;
`

const Button = styled.button`
  margin: 3px 0px 3px 6px;
  padding: 5px;
  color: #bebef0;
  border: 1px solid #9696dc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  transition: 100ms ease-in-out;

  &:hover {
    color: #9696dc;
    background-color: #e6e6fa;
  }
`

const CheckedButton = styled(Button)`
  margin: 3px 6px 3px 0px;
  padding: 0;
  border: none;

  &:hover {
    color: #9696dc;
    background-color: #fff;
  }
`

export { Item, Label, Button, CheckedButton }
