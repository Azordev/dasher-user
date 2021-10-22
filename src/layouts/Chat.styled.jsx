import styled from 'styled-components'

const ChatLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
`

const HeaderChat = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--primary);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 1.5%;
  height: 11vh;
  @media (min-width: 960px) {
    height: 12vh;
  }

  @media (min-width: 3180px) {
    height: 14vh;
  }
`

const BackBtn = styled.img`
  height: 100%;
`

const HeaderChatImg = styled.img`
  height: 90%;
  margin: auto 0;
`

const HeaderText = styled.div`
  width: 33.33%;
  text-align: center;
  color: #f7cd46;
  font-weight: bold;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: auto 0;
  font-size: 1em;

  @media (min-width: 960px) {
    font-size: 2em;
  }

  @media (min-width: 3180px) {
    font-size: 6em;
  }
`

const HeaderTitle = styled.div`
  display: flex;
  text-align: left;
  margin: 0 auto;
`

const ChatBodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 30px auto;
`

const FooterChat = styled.div`
  align-self: flex-end;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  bottom: 0;
`

const FooterChatInput = styled.div`
  flex: ${props => props.cols};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5% 0;

  @media (min-width: 960px) {
    padding: 3.78% 0;
  }

  @media (min-width: 3180px) {
    padding: 3.02% 0;
  }
`

export {
  ChatLayoutContainer,
  HeaderChat,
  FooterChat,
  FooterChatInput,
  ChatBodyWrapper,
  HeaderChatImg,
  HeaderTitle,
  HeaderText,
  BackBtn,
}
