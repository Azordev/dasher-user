import { useMutation } from '@apollo/client'
import { INSERT_ERRORS_MUTATION } from '../services/GraphQl'

/**
 * @callback insertErrors receive two params 
 * @param type 
 * @param location
 *  to use => insertErrors({"type": type, "location": location})
 */
export function InsertErrors() {
  const [insertErrors, { loading, error, data }] = useMutation(INSERT_ERRORS_MUTATION)
  if (error) {
    console.error(error)
  }
 return { insertErrors, loading, error, data }
}
