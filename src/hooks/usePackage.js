import { useQuery, useSubscription } from '@apollo/client'
import { useState, useEffect } from 'react'
import {
  GET_PACKAGE_INFORMATION_QUERY,
  GET_PACKAGE_INFORMATION_SUBSCRIPTION,
  CONFIRM_PACKAGE_QUERY,
} from '../services/GraphQl'

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

export const useConfirmPackage = () => {
  const [confirmData, setConfirmData] = useState([])
  const [packageId, setPackageId] = useState('')
  const [packageInformation, setPackageInformation] = useState('')
  const { loading, error, data } = useQuery(CONFIRM_PACKAGE_QUERY, {
    variables: {
      package_code: packageId,
      client_name: confirmData.name,
      rut: confirmData.RUT,
      client_phone: confirmData.phone,
    },
  })
  function confirmPackage(formData, Id) {
    setConfirmData(formData)
    setPackageId(Id)
  }

  useEffect(() => {
    if (data?.packages[0]?.id) {
      setPackageInformation(data?.packages[0]?.id)
    }
  }, [data])

  return { confirmPackage, loading, error, packageInformation }
}
