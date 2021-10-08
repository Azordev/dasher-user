import gql from "graphql-tag";

export const INSERT_DASHER_RATE_MUTATION = gql`
mutation insertDasherRate($package_code: String!, $dasher_rate: Int!) {
  update_packages(where: {package_code: {_eq: $package_code}}, _set: {dasher_rate: $dasher_rate}) {
    affected_rows
  }
}
`;

export const INSERT_CLIENT_RATE_MUTATION = gql`
mutation insertClientRate($package_code: String!, $client_rating: Int!) {
  update_packages(where: {package_code: {_eq: $package_code}}, _set: {client_rating: $client_rating}) {
    affected_rows
  }
}
`;
