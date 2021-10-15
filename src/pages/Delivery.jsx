import { useParams, useHistory } from 'react-router-dom'
import { Text } from '../components'
import assistant from '../assets/assistant.png'
import chat from '../assets/chat.png'
import send from '../assets/send.png'
import arrow from '../assets/arrow-left.svg'
import gps from '../assets/gps-icon.png'
import Map from '../components/Map/Map'
import { useGetPackageInformation, useClientLocation, useDasherLatestCoordinates } from '../hooks'

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
    <div>
      <div className="delivery-header">
        <img src={arrow} alt="Arrow left" />
        <Text as="h1" color="secondary" medium>
          Recogiendo
        </Text>
        <Text>Nuestro Dasher esta recogiendo su envío...</Text>
        <img src={chat} alt="Chat" />
      </div>
      {center[0] && <Map center={center} dasher={dasher} />}

      <div className="delivery-footer">
        <img src={gps} alt="Gps icon" />
        <Text></Text>
        <Text bold uppercase>
          {packageInformation && packageInformation.packages[0].estimated_arrival}
        </Text>
        <Text>Tiempo estimado de llegada</Text>
        <img src={assistant} alt="Central Dasher" />
        <Text>Central Dasher</Text>
      </div>
      <div className="modal-pick-up">
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
      </div>
    </div>
  )
}

export default Delivery
