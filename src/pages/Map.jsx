import React from 'react'
import {
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
} from '../components/Map/Map.styled'
import arrow from '../assets/arrow-left.svg'
import chat from '../assets/chat.png'

const MapLayout = () => (
  <React.Fragment>
    <HeaderMap>
      <BackBtn src={arrow} />
      <BackTxt>Atr&aacute;s</BackTxt>
      <HeaderText>
        <HeaderTitle>En camino...</HeaderTitle>
        <HeaderSubTitle>Vamos con tu envio...</HeaderSubTitle>
      </HeaderText>
      <ChatBtnContainer>
        <ChatBtn src={chat} />
      </ChatBtnContainer>
    </HeaderMap>
    <FooterMap>
      <FooterMapAddress cols={'0 0 100%'}>Av, Apurimac 1020, Santiago de Chile</FooterMapAddress>
      <FooterMapAddress cols={'0 0 50%'}>Tiempo estimado de llegada</FooterMapAddress>
      <FooterMapAddress cols={'0 0 50%'}>Central Dasher</FooterMapAddress>
    </FooterMap>
  </React.Fragment>
)

export default MapLayout
