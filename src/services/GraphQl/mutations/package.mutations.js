import gql from "graphql-tag";

export const INSERT_DASHER_RATE_MUTATION = gql`
  mutation insertDasherRate($dasher_rate: Int!) {
    insert_packages(objects: {dasher_rate: $dasher_rate}) {
      affected_rows
    }
  }
`;

export const INSERT_CLIENT_RATE_MUTATION = gql`
mutation insertClientRate($client_rating: Int!) {
  insert_packages(objects: {client_rating: $client_rating}) {
    affected_rows
  }
}
`;
