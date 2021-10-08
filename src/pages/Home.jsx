import { Text } from '../components/Text/Text';
import { useQuery, useSubscription } from '@apollo/client'
import { GET_PACKAGE_INFORMATION_QUERY, GET_PACKAGE_INFORMATION_SUBSCRIPTION } from '../services/GraphQl'
import PropTypes from 'prop-types'
import deliveryMan from "../assets/delivery-man.png";


const LatestCordenates = ({ packageId }) => {
  // eslint-disable-next-line
  console.log(packageId)
  const { data, error, loading } = useSubscription(GET_PACKAGE_INFORMATION_SUBSCRIPTION, {
    variables: { package_code: packageId },
  })
  // eslint-disable-next-line
  console.log(data)

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
      {!loading && data.packages[0] ?(
        <pre>
          Lat:{data.packages[0].current_lat}, Lon:{data.packages[0].current_lon}
        </pre>
      ):<span>No data</span>}{' '}
    </h4>
  )
}

const GetPackageInformationQuery = ({ packageId }) => {
  // eslint-disable-next-line
  console.log(packageId)
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

const Home = () => (
  <div>
    <Text as="h1" color="secondary" large>Hola!</Text>
    <Text small>Revisemos como viene tu envío</Text>
    <img src={deliveryMan} alt="Delivery man"/>
    <Text as="button" bold uppercase>Aceptar</Text>
    {/* cspell:disable-next-line */}
    <GetPackageInformationQuery packageId={'hola'} />
        {/* cspell:disable-next-line */}
    <LatestCordenates packageId={'hola'} />
    </div>
)

GetPackageInformationQuery.propTypes = {
  packageId: PropTypes.string,
}

LatestCordenates.propTypes = {
  packageId: PropTypes.string,
}

export default Home
