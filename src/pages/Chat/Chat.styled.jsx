import styled from 'styled-components'
import { bg, m, p, rounded, size, text } from '../../styles/mixins'

export const ChatLayoutContainer = styled.div`
  ${[size({ width: '100vw', minHeight: '100vh' }), bg.white]}
  display: flex;
  flex-direction: column;
`

export const HeaderChat = styled.div`
  ${[rounded({ bl: '25px', br: '25px' }), p({ all: '1.5%' }), size({ height: '11vh' }), bg.primary]}
  display: flex;
  flex-direction: row;
  position: fixed;
  width: 100%;

  @media (min-width: 960px) {
    height: 12vh;
  }

  @media (min-width: 3180px) {
    height: 14vh;
  }
`

export const HeaderChatImg = styled.img`
  height: 90%;
  margin: auto 10px;

  @media (max-width: 960px) {
    margin: auto 0;
  }
`

export const HeaderText = styled.div`
  ${[m({ x: '0', y: 'auto' }), size({ width: '33.33%' }), text.base, text[700], text.secondary, text.textCenter]}
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (min-width: 960px) {
    font-size: 2em;
  }

  @media (min-width: 3180px) {
    font-size: 6em;
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  text-align: left;
  margin: 0 auto;
`

export const ChatBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 6rem auto;
  margin-bottom: 7rem;

  @media (min-width: 960px) {
    margin: 10rem auto;
  }
`

export const FooterChat = styled.div`
  align-self: flex-end;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  bottom: 0;
  position: fixed;
`

export const FooterChatInput = styled.div`
  ${[p({ x: '0', y: '5%' }), text.textCenter, bg.white]}
  flex: ${props => props.cols};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  & img {
    width: 3rem;
    margin: 1rem;
    cursor: pointer;
  }
`

export const MessageRow = styled.div`
  margin: 10px 0;
  display: block;

  &::after {
    clear: both;
    display: table;
  }

  & img {
    float: ${({ type }) => (type === 'client' ? `left` : `right`)};
    width: 3rem;
  }
`

export const MessageBox = styled.div`
  ${[
    m({ x: '1vw', y: '0' }),
    p({ all: '10px' }),
    rounded({ all: '15px' }),
    size({ width: '40vw' }),
    text.base,
    text.gray09,
    bg.gray,
  ]}
  display: inline-block;

  @media (max-width: 960px) {
    width: 80vw;
  }

  @media (min-width: 3180px) {
    line-height: 3.5vw;
    font-size: 3rem;
  }
`

export const Avatar = styled.img`
  display: inline-block;
  width: 14vw;
  margin: auto 0;

  @media (min-width: 960px) {
    width: 4vw;
  }
`
