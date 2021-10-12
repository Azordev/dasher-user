import { useParams, useHistory } from 'react-router-dom'
import { Text } from '../components'
import assistant from '../assets/assistant.png'
import chat from '../assets/chat.png'
import send from '../assets/send.png'
import arrow from '../assets/arrow-left.svg'
import gps from '../assets/gps-icon.png'
import Map from '../components/Map/Map'
import { useQuery, useSubscription } from '@apollo/client'
import { GET_PACKAGE_INFORMATION_QUERY, GET_PACKAGE_INFORMATION_SUBSCRIPTION } from '../services/GraphQl'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

const LatestCordenates = ({ packageId }) => {
  const { data, error, loading } = useSubscription(GET_PACKAGE_INFORMATION_SUBSCRIPTION, {
    variables: { package_code: packageId },
  })
  if (error)
    return (
      <pre>
        Error in GET_PACKAGE_INFORMATION_QUERY
        {JSON.stringify(error, null, 2)}
      </pre>
    )
  return (
    <h4>
      Current cordenates:{' '}
      {!loading && data.packages[0] ? (
        <pre>
          Lat:{data.packages[0].current_lat}, Lon:{data.packages[0].current_lon}
        </pre>
      ) : (
        <span>No data</span>
      )}{' '}
    </h4>
  )
}

const GetPackageInformationQuery = ({ packageId }) => {
  const { loading, error, data } = useQuery(GET_PACKAGE_INFORMATION_QUERY, {
    variables: { package_code: packageId },
  })

  if (loading) return <pre>Loading</pre>
  if (error)
    return (
      <pre>
        Error in GET_PACKAGE_INFORMATION_QUERY
        {JSON.stringify(error, null, 2)}
      </pre>
    )

  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>
  }
}

GetPackageInformationQuery.propTypes = {
  packageId: PropTypes.string,
}

LatestCordenates.propTypes = {
  packageId: PropTypes.string,
}

const Delivery = () => {
  const [isLoading, setLoading] = useState(true)
  const [hasError, setError] = useState(false)
  const [center, setCenter] = useState([undefined, undefined])
  const [dasher, setDasher] = useState([0, 0])
  const { id } = useParams()
  const history = useHistory()
  const { loading, error, data } = useQuery(GET_PACKAGE_INFORMATION_QUERY, {
    variables: { package_code: id },
  })

  if (!id || id !== 'test') {
    history.push('/check')
  }

  useEffect(() => {
    setLoading(true)
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => setCenter([Number(position.coords.latitude), Number(position.coords.longitude)]),
        e => console.error(e.code),
        {
          enableHighAccuracy: false,
          timeout: 15000,
          maximumAge: 0,
        },
      )
    }
    if (!loading) {
      if (error) {
        console.error(JSON.stringify(error, null, 2))
        setError(true)
      }
      if (data) {
        setDasher([Number(data.packages[0]?.current_lat), Number(data.packages[0]?.current_lon)])
        setLoading(false)
      }
    }
  }, [data])

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
      {/* cspell:disable-next-line */}
      <GetPackageInformationQuery packageId={'test'} />
      {/* cspell:disable-next-line */}
      <LatestCordenates packageId={'test'} />
      <div className="delivery-footer">
        <img src={gps} alt="Gps icon" />
        <Text></Text>
        <Text color="secondary" bold uppercase>
          1 hora
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
