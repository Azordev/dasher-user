import gql from 'graphql-tag'

export const INSERT_CLIENT_CHATS_MUTATION = gql`
  mutation insert_client_chats(
    $last_client_message: String!
    $last_client_update: timestamptz!
    $user_type: String!
    $package_id: String!
  ) {
    insert_chats(
      objects: {
        last_client_message: $last_client_message
        last_client_update: $last_client_update
        user_type: $user_type
        package_id: $package_id
      }
    ) {
      affected_rows
    }
  }
`

export const INSERT_DASHER_CHATS_MUTATION = gql`
  mutation insert_dasher_chats(
    $user_type: String!
    $package_id: String!
    $last_dasher_message: String!
    $last_dasher_update: timestamptz!
  ) {
    insert_chats(
      objects: {
        user_type: $user_type
        package_id: $package_id
        last_dasher_message: $last_dasher_message
        last_dasher_update: $last_dasher_update
      }
    ) {
      affected_rows
    }
  }
`
