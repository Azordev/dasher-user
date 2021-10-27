import { useParams, useHistory } from 'react-router-dom'
import { Text, Modal } from '../components'
import {
  MapLayoutContainer,
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
import send from '../assets/send.png'
import arrow from '../assets/arrow-left.svg'
import gps from '../assets/gps-icon.png'
import Map from '../components/Map/Map'
import { useGetPackageInformation, useClientLocation, useDasherLatestCoordinates } from '../hooks'
import { Fragment, useState } from 'react'

const Delivery = () => {
  const { id } = useParams()
  const history = useHistory()
  const [isModalOpen, changeIsModalOpen] = useState(true)
  const [checkRedirect, setCheckRedirect] = useState(false)

  if (!id || id !== 'test') {
    history.push('/check')
  }
  if (checkRedirect === true) {
    history.push('/check/' + id)
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
      <MapLayoutContainer>
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
            txt={packageInformation?.packages[0]?.client_address}
            style={{ flexDirection: 'row' }}
          >
            <img src={gps} alt="Gps icon" />
          </FooterMapAddress>
          <FooterMapAddress cols={'0 0 50%'} txt={'Tiempo estimado de llegada'}>
            <Text small bold uppercase>
              {packageInformation?.packages[0]?.estimated_arrival}
            </Text>
          </FooterMapAddress>
          <FooterMapAddress cols={'0 0 50%'} txt={'Central Dasher'}>
            <img src={assistant} alt="Central Dasher" />
          </FooterMapAddress>
        </FooterMap>
      </MapLayoutContainer>
      <Modal
        isOpen={isModalOpen}
        handleClick={() => {
          changeIsModalOpen(false)
          setCheckRedirect(true)
        }}
        actionText="Aceptar"
      >
        <Text as="h1" color="primary" medium center>
          El Dasher ha llegado
        </Text>
        <Text as="h4" color="gray" small center>
          Recoja su env&iacute;o
        </Text>
        <img src={send} alt="Dasher has arrived image" />
      </Modal>
    </Fragment>
  )
}

export default Delivery
