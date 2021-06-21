import styled from 'styled-components'

const Label = styled.span`
  font-family: ${({ theme }) => theme.fonts.comicSans};
  cursor: pointer;

  color: ${({ important }) => (important ? 'tomato' : 'black')};
  font-weight: ${({ important }) => (important ? 'bold' : 'normal')};
  text-decoration: ${({ done }) => (done ? 'line-through' : 'none')};
  font-style: ${({ done }) => (done ? 'italic' : 'normal')};

  flex-grow: 1;
  overflow-wrap: anywhere;
`

export { Label }
