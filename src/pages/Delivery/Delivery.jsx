// cSpell:word iacute
import { useParams, useHistory } from 'react-router-dom'
import { Text, Modal } from '../../components'
import send from '../../assets/send.png'
import Map from '../../components/Map/Map'
import { useGetPackageInformation, useClientLocation, useDasherLatestCoordinates } from '../../hooks'
import { useState } from 'react'
import Layout from './Delivery.layout'

const Delivery = () => {
  const { id } = useParams()
  const history = useHistory()
  const [openDeliveryConfirmedModal, toggleDeliveryConfirmedModal] = useState(true)
  const { packageInformation } = useGetPackageInformation(id)
  const { latestCoordinates, error, loading } = useDasherLatestCoordinates(id)
  const { isLoading, hasError, center, dasher, currentStatus } = useClientLocation({
    data: latestCoordinates,
    error: error,
    loading: loading,
  })

  if (!id) {
    history.push('/check')
  }

  const toConfirm = () => history.push(`/confirm/${id}`)

  const toChat = () => history.push(`/chat/${id}`)

  if (isLoading || !packageInformation?.packages[0]?.package_code) {
    return <pre>Loading...</pre>
  }

  if (hasError) {
    return <pre>Error</pre>
  }

  return (
    <Layout
      packageId={id}
      headerTitle="En camino..."
      headerSubtitle="Vamos con tu envio..."
      clientAddress={packageInformation?.packages[0]?.client_address}
      estimatedArrival={packageInformation?.packages[0]?.estimated_arrival}
      isLoading={isLoading}
      hasError={hasError}
      toChat={toChat}
      DeliveryConfirmedModal={
        <Modal
          isOpen={currentStatus === 'destination_reached' && openDeliveryConfirmedModal}
          handleClick={() => {
            toggleDeliveryConfirmedModal(!openDeliveryConfirmedModal)
            toConfirm()
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
      }
    >
      {center[0] && <Map center={center} dasher={dasher} />}
    </Layout>
  )
}

export default Delivery
