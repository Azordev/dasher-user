import styled from 'styled-components'
import { text, bg } from '../styles/mixins'
import { useQuery, useSubscription } from '@apollo/client'
import { GET_PACKAGE_INFORMATION_QUERY, GET_PACKAGE_INFORMATION_SUBSCRIPTION } from '../services/GraphQl'
import PropTypes from 'prop-types'
const Title = styled.h1`
  ${[text.test, text['4xl']]}
  ${bg.primary}
`

const LatestCordenates = ({ packageId }) => {
  const { data, loading } = useSubscription(GET_PACKAGE_INFORMATION_SUBSCRIPTION)
  return (
    <h4>
      Current cordenates:{' '}
      {!loading && (
        <pre>
          Lat:{data.packages[0].current_lat}, Lon:{data.packages[0].current_lon}
        </pre>
      )}
    </h4>
  )
}

const GetPackageInformationQuery = ({ packageId }) => {
  const { loading, error, data } = useQuery(GET_PACKAGE_INFORMATION_QUERY, {
    variables: { package_id: packageId },
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
    <GetPackageInformationQuery packageId={'hola'} />
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
