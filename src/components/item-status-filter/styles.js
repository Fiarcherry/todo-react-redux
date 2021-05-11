import styled from 'styled-components'

const Button = styled.button`
  color: ${(props) => (props.isActive ? '#E6E6FA' : '#9696DC')};
  margin: 5px 0px;
  padding: 8px 30px;
  background-color: ${(props) => (props.isActive ? '#9696DC' : '#E6E6FA')};
  border: none;
  transition: 100ms ease-in-out;
  cursor: ${(props) => (props.isActive ? 'default' : 'pointer')};

  &:hover {
    color: ${(props) => (props.isActive ? '#E6E6FA' : '#F0F0FF')};
    background-color: ${(props) => (props.isActive ? '#9696DC' : '#BEBEF0')};
  }
`

export { Button }
