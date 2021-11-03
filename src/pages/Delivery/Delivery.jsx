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
  const [openDeliveryConfirmedModal, toggleDeliveryConfirmedModal] = useState(false)

  if (!id || id !== 'test') {
    history.push('/check')
  }
  const toCheck = () => history.push(`/check/${id}`)

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
    <Layout
      packageId={packageInformation?.packages[0]?.package_code}
      headerTitle="En camino..."
      headerSubtitle="Vamos con tu envio..."
      clientAddress={packageInformation?.packages[0]?.client_address}
      estimatedArrival={packageInformation?.packages[0]?.estimated_arrival}
      isLoading={isLoading}
      hasError={hasError}
      DeliveryConfirmedModal={
        <Modal
          isOpen={openDeliveryConfirmedModal}
          handleClick={() => {
            toggleDeliveryConfirmedModal(false)
            toCheck()
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
