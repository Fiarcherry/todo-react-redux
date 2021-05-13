import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const List = styled.ul`
  max-width: 800px;
  padding: 0px;

  flex-grow: 1;
`

const ListElement = styled.li`
  list-style: none;
`

const Divider = styled.hr`
  border: 1px solid #e6e6fa;
`

export { Container, List, ListElement, Divider }
