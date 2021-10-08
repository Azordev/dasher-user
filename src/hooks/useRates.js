import { useMutation } from '@apollo/client'
import { INSERT_CLIENT_RATE_MUTATION,INSERT_DASHER_RATE_MUTATION } from '../services/GraphQl'

export function InsertClientRate() {
  const [insertClientRate, { loading, error, data }] = useMutation(INSERT_CLIENT_RATE_MUTATION)
  if (error) {
    console.error(error)
  }
  // to use => insertClientRate({"package_code": package_code,"client_rating": client_rating})
  return { insertClientRate, loading, error, data }
}

export function InsertDasherRate() {
  const [insertDasherRate, { loading, error, data }] = useMutation(INSERT_DASHER_RATE_MUTATION)
  if (error) {
    console.error(error)
  }
  // to use => insertDasherRate({"package_code": package_code, "dasher_rate": dasher_rate})}
  return { insertDasherRate, loading, error, data }
}
