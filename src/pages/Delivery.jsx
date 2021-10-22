import { useParams, useHistory } from 'react-router-dom'
import { Text } from '../components'
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
} from '../layouts/Map.styled'
import assistant from '../assets/assistant.png'
import chat from '../assets/chat.png'
// import send from '../assets/send.png'
import arrow from '../assets/arrow-left.svg'
import gps from '../assets/gps-icon.png'
import Map from '../components/Map/Map'
import { useGetPackageInformation, useClientLocation, useDasherLatestCoordinates } from '../hooks'
import { Fragment } from 'react'

const Delivery = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id || id !== 'test') {
    history.push('/check')
  }

  const { packageInformation } = useGetPackageInformation({ packageId: id })
  const { latestCoordinates, error, loading } = useDasherLatestCoordinates({ packageId: id })
  const { isLoading, hasError, center, dasher } = useClientLocation({
    data: latestCoordinates,
    error: error,
    loading: loading,
  })

  if (isLoading) {
    return <pre>Loading...</pre>
  }

  if (hasError) {
    return <pre>Error</pre>
  }

  return (
    <Fragment>
      <HeaderMap>
        <BackBtn src={arrow} />
        <BackTxt txt={'Atrás'}></BackTxt>
        <HeaderText>
          <HeaderTitle>En camino...</HeaderTitle>
          <HeaderSubTitle>Vamos con tu envio...</HeaderSubTitle>
        </HeaderText>
        <ChatBtnContainer href={`/chat/${id}`}>
          <ChatBtn src={chat} />
        </ChatBtnContainer>
      </HeaderMap>
      {center[0] && <Map center={center} dasher={dasher} />}
      <FooterMap>
        <FooterMapAddress
          cols={'0 0 100%'}
          txt={packageInformation.packages[0].client_address}
          style={{ flexDirection: 'row' }}
        >
          <img src={gps} alt="Gps icon" />
        </FooterMapAddress>
        <FooterMapAddress cols={'0 0 50%'} txt={'Tiempo estimado de llegada'}>
          <Text bold uppercase>
            {packageInformation.packages[0].estimated_arrival}
          </Text>
        </FooterMapAddress>
        <FooterMapAddress cols={'0 0 50%'} txt={'Central Dasher'}>
          <img src={assistant} alt="Central Dasher" />
        </FooterMapAddress>
      </FooterMap>
      {/* <div className="modal-pick-up">
        <Text as="h1" color="primary" small>
          El Dasher ha llegado
        </Text>
        <Text small color="danger">
          Recoja su envío
        </Text>
        <img src={send} alt="Send" />
        <Text as="button" bold uppercase>
          Aceptar
        </Text>
      </div> */}
    </Fragment>
  )
}

export default Delivery
