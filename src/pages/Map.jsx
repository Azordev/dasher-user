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
      <BackTxt txt={'Atrás'}></BackTxt>
      <HeaderText>
        <HeaderTitle>En camino...</HeaderTitle>
        <HeaderSubTitle>Vamos con tu envio...</HeaderSubTitle>
      </HeaderText>
      <ChatBtnContainer href="/chat/1">
        <ChatBtn src={chat} />
      </ChatBtnContainer>
    </HeaderMap>
    <div style={{ display: 'flex', height: '65vh' }}></div>
    <FooterMap>
      <FooterMapAddress cols={'0 0 100%'} txt={'Av, Apurimac 1020, Santiago de Chile'}></FooterMapAddress>
      <FooterMapAddress cols={'0 0 50%'} txt={'Tiempo estimado de llegada'}></FooterMapAddress>
      <FooterMapAddress cols={'0 0 50%'} txt={'Central Dasher'}></FooterMapAddress>
    </FooterMap>
  </React.Fragment>
)

export default MapLayout
