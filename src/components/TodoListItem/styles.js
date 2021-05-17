import styled from 'styled-components'

const Item = styled.span`
  color: ${({ important }) => (important ? 'tomato' : 'black')};
  font-weight: ${({ important }) => (important ? 'bold' : 'normal')};
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  font-style: ${({ done }) => (done ? 'italic' : 'normal')};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.comicSans};
  cursor: pointer;

  flex-grow: 1;
  overflow-wrap: anywhere;
`

export { Item, Label }
