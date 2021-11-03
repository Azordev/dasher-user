import PropTypes from 'prop-types'
import { Text } from '../../components'
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
} from './Delivery.styled'
import assistant from '../../assets/assistant.png'
import chat from '../../assets/chat.png'
import arrow from '../../assets/arrow-left.svg'
import gps from '../../assets/gps-icon.png'
import { Fragment } from 'react'

/**
 * Delivery Layout
 *
 * @augments { React.Component<{ packageId, headerTitle, headerSubtitle, clientAddress, estimatedArrival, isLoading, hasError, DeliveryConfirmedModal, children }, {}> }
 */
const Delivery = ({
  packageId,
  headerTitle,
  headerSubtitle,
  clientAddress,
  estimatedArrival,
  isLoading,
  hasError,
  DeliveryConfirmedModal,
  children,
}) => {
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
            <HeaderTitle>{headerTitle}</HeaderTitle>
            <HeaderSubTitle>{headerSubtitle}</HeaderSubTitle>
          </HeaderText>
          <ChatBtnContainer href={`/chat/${packageId}`}>
            <ChatBtn src={chat} />
          </ChatBtnContainer>
        </HeaderMap>
        {children}
        <FooterMap>
          <FooterMapAddress cols={'0 0 100%'} txt={clientAddress}>
            <img src={gps} alt="Gps icon" />
          </FooterMapAddress>
          <FooterMapAddress cols={'0 0 50%'} txt={'Tiempo estimado de llegada'}>
            <Text color={'var(--secondary)'} small bold uppercase>
              {estimatedArrival}
            </Text>
          </FooterMapAddress>
          <FooterMapAddress cols={'0 0 50%'} txt={'Central Dasher'}>
            <img src={assistant} alt="Central Dasher" />
          </FooterMapAddress>
        </FooterMap>
      </MapLayoutContainer>
      {DeliveryConfirmedModal}
    </Fragment>
  )
}

Delivery.propTypes = {
  packageId: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
  headerSubtitle: PropTypes.string.isRequired,
  clientAddress: PropTypes.string.isRequired,
  estimatedArrival: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  DeliveryConfirmedModal: PropTypes.element.isRequired,
  children: PropTypes.element,
}

export default Delivery
