import gql from 'graphql-tag'

export const GET_CHAT_MESSAGES_SUBSCRIPTION = gql`
subscription getChatMessages($created_at: order_by = asc, $package_id: uuid!) {
  chats(order_by: {created_at: $created_at}, where: {package_id: {_eq: $package_id}}) {
    last_client_message
    last_client_update
    last_dasher_message
    last_dasher_update
    user_type
    updated_at
  }
}

`
