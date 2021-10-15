import { useQuery, useSubscription } from '@apollo/client'
import { useState, useEffect } from 'react'
import { GET_PACKAGE_INFORMATION_QUERY, GET_PACKAGE_INFORMATION_SUBSCRIPTION } from '../services/GraphQl'
/* cspell:disable-next-line */
export const useDasherLatestCordenates = ({ packageId }) => {
/* cspell:disable-next-line */
  const [latestCordenates, setLatestCordenates] = useState([])
  // eslint-disable-next-line
  const { data, error, loading } = useSubscription(GET_PACKAGE_INFORMATION_SUBSCRIPTION, {
    variables: { package_code: packageId },
  })

  useEffect(() => {
    /* cspell:disable-next-line */
    setLatestCordenates(data)
  }, [data])
/* cspell:disable-next-line */
  return { loading, error, latestCordenates }
}

export const useGetPackageInformation = ({ packageId }) => {
   // eslint-disable-next-line
   const [packageInformation, setPackageInformation] = useState([])
  // eslint-disable-next-line
  const { loading, error, data } = useQuery(GET_PACKAGE_INFORMATION_QUERY, {
    variables: { package_code: packageId },
  })

  useEffect(() => {
    setPackageInformation(data)
  }, [data])

  return { loading, error, packageInformation }
}
