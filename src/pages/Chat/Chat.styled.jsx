import styled from 'styled-components'
import { bg, m, p, rounded, size, text } from '../../styles/mixins'

export const ChatLayoutContainer = styled.div`
  ${[size({ width: '100vw', minHeight: '100vh' }), bg.white]}
  display: grid;
  grid-template-rows: 100px calc(100vh - 200px) 100px;
  overflow: hidden;
`

export const HeaderChat = styled.div`
  ${[rounded({ bl: '25px', br: '25px' }), p({ all: '1.5%' }), size({ height: '11vh' }), bg.primary]}
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  width: 100%;
  grid-row: 1/2;
  height: 80px;
`

export const HeaderChatImgContainer = styled.div`
  width: 33.33vw;
  text-align: right;
  display: flex;
  justify-content: flex-end;
`
export const HeaderChatImg = styled.img`
  margin: auto 10px;
  width: 4vw;
  min-width: 40px;
  max-width: 50px;

  @media (max-width: 960px) {
    margin: auto 0;
  }
`

export const HeaderText = styled.div`
  ${[size({ width: '33.33%' }), text.base, text[700], text.secondary, text.textCenter]}
  display: flex;

  @media (min-width: 1025px) {
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
  grid-row: 2/3;
  padding: 1rem 2rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FooterChat = styled.div`
  width: 100%;
  grid-row: 3/-1;
  display: flex;
  align-items: center;
`

export const FooterChatInput = styled.form`
  ${[p({ x: '0', y: '5%' }), text.textCenter, bg.white]}
  flex: ${props => props.cols};
  background-color: var(--secondary);
  padding: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;

    @media (min-width: 1025px) {
      width: 47vw;
    }
  }

  button {
    margin: 1rem;
    cursor: pointer;
    background: none;
    border: none;
    width: fit-content;

    img {
      width: 3rem;
      cursor: pointer;
    }
  }
`

export const MessageRow = styled.div`
  margin: 10px 0;
  display: grid;
  grid-template-columns: 40px calc(100% - 40px - 2rem);
  width: 100%;

  @media (min-width: 1025px) {
    width: 47vw;
  }

  &::after {
    clear: both;
    display: table;
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
  width: max-content;
  overflow-wrap: break-word;

  @media (min-width: 3180px) {
    line-height: 3.5vw;
    font-size: 3rem;
  }
`

export const Avatar = styled.img`
  float: ${({ type }) => (type === 'client' ? `left` : `right`)};
  width: 4vw;
  min-width: 40px;
  max-width: 50px;
  margin: auto 0;

  @media (min-width: 1025px) {
    width: 4vw;
  }
`
