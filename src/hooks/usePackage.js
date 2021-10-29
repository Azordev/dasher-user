import { useQuery, useSubscription } from '@apollo/client'
import { useState, useEffect } from 'react'
import { GET_PACKAGE_INFORMATION_QUERY, GET_PACKAGE_INFORMATION_SUBSCRIPTION } from '../services/GraphQl'

export const useDasherLatestCoordinates = ({ packageId }) => {
  const [latestCoordinates, setLatestCoordinates] = useState([])
  const { data, error, loading } = useSubscription(GET_PACKAGE_INFORMATION_SUBSCRIPTION, {
    variables: { package_code: packageId },
  })

  useEffect(() => {
    setLatestCoordinates(data)
  }, [data])
  return { loading, error, latestCoordinates: latestCoordinates }
}

export const useGetPackageInformation = ({ packageId }) => {
  const [packageInformation, setPackageInformation] = useState([])
  const { loading, error, data } = useQuery(GET_PACKAGE_INFORMATION_QUERY, {
    variables: { package_code: packageId },
  })

  useEffect(() => {
    setPackageInformation(data)
  }, [data])

  return { loading, error, packageInformation }
}


