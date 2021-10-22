import styled from 'styled-components'

const MessageRow = styled.div`
  margin: 10px 0;
  display: block;
  &:after {
    clear: both;
    display: table;
  }
  & img {
    float: ${({ type }) => (type === 'client' ? `left` : `right`)};
  }
`

export default MessageRow
