import styled from 'styled-components'

const HeaderMap = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--primary);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 1.5%;
  height: 15vh;
`

const BackBtn = styled.img`
  @media (max-width: 960px) {
    height: 100%;
  }
  @media (min-width: 961px) {
    height: 100%;
  }
`

const BackTxt = styled.p`
  flex: 1;
  color: white;
  font-size: 1em;
  margin: auto 0;
  :before {
    content: '${props => props.txt}';
  }
  @media (max-width: 960px) {
    display: none;
  }
  @media (min-width: 961px) {
    font-size: 2.5em;
  }
  @media (min-width: 3180px) {
    font-size: 6em;
  }
`

const HeaderText = styled.div`
  width: 33.33%;
  text-align: center;
  color: #f7cd46;
  font-size: 1em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  @media (min-width: 960px) {
    font-size: 2em;
  }
  @media (min-width: 3180px) {
    font-size: 6em;
  }
  @media (max-width: 960px) {
    font-size: 1em;
  }
`

const ChatBtnContainer = styled.a`
  width: 33.33%;
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
  :before {
    content: '${props => props.title}';
  }
`

const HeaderSubTitle = styled.div`
  display: flex;
  text-align: left;
  font-size: 0.55em;
  color: white;
  margin: 0 auto;
  :before {
    content: '${props => props.subtitle}';
  }
`

const FooterMap = styled.div`
  align-self: flex-end;
  background-color: #486ef5;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    width: 80%;
    margin: 0 10%;
    height: 20vh;
  }
  @media (min-width: 961px) {
    width: 50%;
    margin: 0 25%;
    height: auto;
  }
  @media (min-width: 3180px) {
    width: 70%;
    margin: 0 15%;
    height: auto;
  }
`

const FooterMapAddress = styled.div`
  flex: ${props => props.cols};
  text-align: center;
  color: #f8d24c;
  :before {
    content: '${props => props.txt}';
  }
  @media (max-width: 960px) {
    font-size: 0.7em;
    padding: 5% 0;
  }
  @media (min-width: 960px) {
    font-size: 1em;
    padding: 3.78% 0;
  }
  @media (min-width: 3180px) {
    font-size: 3em;
    height: 50px;
    padding: 3.02% 0;
  }
`

export {
  HeaderMap,
  BackBtn,
  BackTxt,
  HeaderText,
  ChatBtnContainer,
  ChatBtn,
  HeaderTitle,
  HeaderSubTitle,
  FooterMap,
  FooterMapAddress,
}
