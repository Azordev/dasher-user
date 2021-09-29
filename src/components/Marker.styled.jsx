import styled from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: ${props => (props.show ? '#2196F3' : '#ccc')};
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};

  &:hover {
    z-index: 1;
  }
`

export default Wrapper
