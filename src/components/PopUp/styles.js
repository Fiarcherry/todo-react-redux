import styled from 'styled-components'

const StyledPopUp = styled.div`
  width: 100%;
  min-width: 250px;
  min-height: 100%;
  overflow: hidden;
  position: fixed;
  top: 0px;
  right: 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 200ms ease-out;

  background-color: ${({ active }) => (active ? '#0006' : '#0000')};
  opacity: ${({ active }) => (active ? '1' : '0')};
  pointer-events: ${({ active }) => (active ? 'all' : 'none')};
`

const StyledPopUpContent = styled.div`
  padding: 40px;
  width: 50%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 8px #000;

  transition: transform 200ms ease-out;

  transform: ${({ active }) => (active ? 'scale(1)' : 'scale(0.5)')};
`
export { StyledPopUp, StyledPopUpContent }
