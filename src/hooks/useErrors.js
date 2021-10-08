import { useMutation } from '@apollo/client'
import { INSERT_ERRORS_MUTATION } from '../services/GraphQl'

export function InsertErrors() {
  const [insertErrors, { loading, error, data }] = useMutation(INSERT_ERRORS_MUTATION)
  if (error) {
    console.error(error)
  }
  // to use => insertErrors({"type": type, "location": location})
  return { insertErrors, loading, error, data }
}
