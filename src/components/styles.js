import styled from 'styled-components'

const Header = styled.h1``

const TodosLeft = styled.h2``

const Input = styled.input``

const Button = styled.button``

const DeleteButton = styled(Button)``

const ImportantButton = styled(Button)``

const FilterButton = styled(Button)``

const Item = styled.span`
  color: ${(props) => (props.important ? 'tomato' : 'black')};
`

export {
  Header,
  TodosLeft,
  Input,
  DeleteButton,
  ImportantButton,
  FilterButton,
  Item,
}
