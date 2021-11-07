import gql from 'graphql-tag'

export const INSERT_DASHER_RATE_MUTATION = gql`
  mutation insertDasherRate($id: uuid!, $dasher_rate: Int!) {
    update_packages(where: { id: { _eq: $id } }, _set: { dasher_rate: $dasher_rate }) {
      affected_rows
    }
  }
`

export const INSERT_CLIENT_RATE_MUTATION = gql`
  mutation insertClientRate($id: uuid!, $client_rating: Int!) {
    update_packages(where: { id: { _eq: $id } }, _set: { client_rating: $client_rating, order_status: "rated" }) {
      affected_rows
    }
  }
`
