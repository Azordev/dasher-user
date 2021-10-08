import gql from 'graphql-tag'

export const INSERT_ERRORS_MUTATION = gql`
  mutation insert_errors($type: String!, $location: String!) {
    insert_errors(objects: { type: $type, location: $location }) {
      affected_rows
    }
  }
`
