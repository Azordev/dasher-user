import styled from 'styled-components'

const MapLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

const HeaderMap = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--primary);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 5px;
  min-height: 10vh;
  place-content: space-between;

  @media (max-width: 960px) {
    width: inherit;
    position: absolute;
    z-index: 1;
  }
`

const HeaderText = styled.div`
  width: 33.33vw;
  text-align: center;
  color: #f7cd46;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  height: auto;

  @media (min-width: 900px) {
    font-size: 2em;
  }

  @media (min-width: 3180px) {
    font-size: 6em;
  }
`

const ChatBtnContainer = styled.div`
  width: 28.33vw;
  height: auto;
  display: flex;
  justify-content: flex-end;
  cursor: default;
`

const ChatBtn = styled.img`
  cursor: pointer;
  margin: auto 0;

  @media (min-width: 960px) {
    width: auto;
    height: 10vh;
  }

  @media (max-width: 960px) {
    width: 50px;
    height: 50px;
  }
`

const HeaderTitle = styled.div`
  display: flex;
  text-align: left;
  margin: 0 auto;
  font-weight: bold;
`

const HeaderSubTitle = styled.div`
  display: flex;
  text-align: left;
  font-size: 0.58em;
  color: white;
  margin: 0 auto;
`

const FooterMap = styled.div`
  align-self: flex-end;
  background-color: var(--primary);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 50vw;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  margin: 0 auto;

  @media (max-width: 960px) {
    width: 100vw;
    position: absolute;
    bottom: 0;
  }

  @media (min-width: 961px) {
    width: 50vw;
  }

  @media (min-width: 3180px) {
    width: 70vw;
  }
`

const FooterMapAddress = styled.div`
  flex: ${props => props.cols};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #f8d24c;
  padding: 5px 0;

  ::after {
    content: '${props => props.txt}';
  }

  @media (max-width: 960px) {
    font-size: 0.7em;
  }

  @media (min-width: 960px) {
    font-size: 1em;
  }

  @media (min-width: 3180px) {
    font-size: 3em;
  }
`

export {
  MapLayoutContainer,
  HeaderMap,
  HeaderText,
  ChatBtnContainer,
  ChatBtn,
  HeaderTitle,
  HeaderSubTitle,
  FooterMap,
  FooterMapAddress,
}
