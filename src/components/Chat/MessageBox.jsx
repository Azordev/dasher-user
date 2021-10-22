import styled from 'styled-components'

const MessageBox = styled.div`
  display: inline-block;
  padding: 10px;
  background: #e1e1e1;
  border-radius: 15px;
  color: #646464;
  font-size: 1em;
  min-height: 52px;
  margin: 0 1vw;
  line-height: 30px;
  width: 80vw;
  @media (min-width: 960px) {
    width: 40vw;
  }
`

export default MessageBox
