import styled from 'styled-components'

const HeaderMap = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--primary);
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 1.5%;
`

const BackBtn = styled.img`
  width: 30px;
  @media (min-width: 960px) {
    width: 50px;
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
  @media (min-width: 960px) {
    font-size: 1.5em;
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
`

const ChatBtnContainer = styled.a`
  width: 33.33%;
  display: flex;
  justify-content: flex-end;
  cursor: default;
`

const ChatBtn = styled.img`
  cursor: pointer;
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
  position: absolute;
  bottom: 0;
  background-color: #486ef5;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  width: 50%;
  margin: 0 25%;
  height: 20%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 960px) {
    width: 80%;
    margin: 0 10%;
  }
`

const FooterMapAddress = styled.div`
  flex: ${props => props.cols};
  text-align: center;
  padding: 5% 0;
  color: #f8d24c;
  :before {
    content: '${props => props.txt}';
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
