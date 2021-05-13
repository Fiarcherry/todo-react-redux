import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Button = styled.button`
  color: ${(props) => (props.isActive ? '#E6E6FA' : '#9696DC')};
  margin: 5px 0px;
  padding: 8px 10px;
  background-color: ${(props) => (props.isActive ? '#9696DC' : '#E6E6FA')};
  border: none;
  transition: 100ms ease-in-out;
  cursor: ${(props) => (props.isActive ? 'default' : 'pointer')};

  flex-grow: 1;
  min-width: fit-content;
  max-width: 200px;

  &:hover {
    color: ${(props) => (props.isActive ? '#E6E6FA' : '#F0F0FF')};
    background-color: ${(props) => (props.isActive ? '#9696DC' : '#BEBEF0')};
  }
`

export { Container, Button }
