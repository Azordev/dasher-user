import styled from 'styled-components'
import { text, bg } from '../styles/mixins'
import { useQuery, useSubscription } from '@apollo/client'
import { GET_PACKAGE_INFORMATION_QUERY, GET_PACKAGE_INFORMATION_SUBSCRIPTION } from '../services/GraphQl'
import PropTypes from 'prop-types'
import deliveryMan from "../assents/delivery-man.png";


const Title = styled.h1`
  ${[text.test, text['4xl']]}
  ${bg.primary}
`

const LatestCordenates = ({ packageId }) => {
  console.log(packageId)
  const { data, error, loading } = useSubscription(GET_PACKAGE_INFORMATION_SUBSCRIPTION, {
    variables: { package_code: packageId },
  })
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
    <Title>Home</Title>
    <img src={deliveryMan} alt="Delivery man"/>
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
