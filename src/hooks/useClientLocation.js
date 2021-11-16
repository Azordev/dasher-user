// @ts-nocheck
/* cSpell:disable */
import { useEffect, useState } from 'react'

/**
 *
 * @param data package data
 * @param error error in fetch package data
 * @param loading loading package data
 */

export function useClientLocation({ data, error, loading }) {
  const [isLoading, setLoading] = useState(true)
  const [hasError, setError] = useState(false)
  const [center, setCenter] = useState([undefined, undefined])
  const [dasher, setDasher] = useState([0, 0])
  const [currentStatus, setCurrentStatus] = useState('')

  useEffect(() => {
    setLoading(true)

    if (!loading) {
      if (error) {
        console.error(JSON.stringify(error, null, 2))
        setError(true)
        setLoading(false)
      }
      if (data) {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            position => setCenter([Number(position.coords.latitude), Number(position.coords.longitude)]),
            e => setCenter([Number(data.packages[0]?.current_lat), Number(data.packages[0]?.current_lon)]),
            {
              enableHighAccuracy: false,
              timeout: 15000,
              maximumAge: 0,
            },
          )
        }
        setCurrentStatus(data.packages[0]?.order_status)
        setDasher([Number(data.packages[0]?.current_lat), Number(data.packages[0]?.current_lon)])
        setLoading(false)
      }
    }
  }, [data])
  return { isLoading, hasError, center, dasher, currentStatus }
}

/** @param {data} */
/* cspell:disable-next-line */
export function useDasherliveLocation({ data }) {
  const [isLoading, setLoading] = useState(true)
  const [dasher, setDasher] = useState([0, 0])

  useEffect(() => {
    setLoading(true)

    let geoWatch

    function watchLocation(myPosition) {
      // eslint-disable-next-line no-undef
      if (!isEqual(myPosition, dasher)) {
        setDasher(myPosition)
      }
    }

    function startWatch() {
      if (!geoWatch) {
        if ('geolocation' in navigator && 'watchPosition' in navigator.geolocation) {
          geoWatch = navigator.geolocation.watchPosition(
            position => watchLocation([Number(position.coords.latitude), Number(position.coords.longitude)]),
            e => console.error(e),
            {
              enableHighAccuracy: false,
              timeout: 15000,
              maximumAge: 0,
            },
          )
        }
      }
    }
    function stopWatch() {
      navigator.geolocation.clearWatch(geoWatch)
      geoWatch = undefined
    }

    if (
      data.packages[0]?.order_status === 'in_travel' ||
      data.packages[0]?.order_status === 'ready' ||
      data.packages[0]?.order_status === 'collected'
    ) {
      startWatch()
    } else {
      stopWatch()
    }
  }, [data, dasher])

  return { isLoading, dasher }
}
