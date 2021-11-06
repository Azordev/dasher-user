import gql from 'graphql-tag'

export const GET_PACKAGE_INFORMATION_QUERY = gql`
  query getPackageInformation($package_code: String!) {
    packages(where: { package_code: { _eq: $package_code } }) {
      id
      client_address
      client_identification_document
      client_name
      client_phone
      current_lat
      current_lon
      order_status
      package_code
      estimated_arrival
      package_company {
        company_address
        company_name
      }
      package_dasher {
        dasher_name
        dasher_phone
        dasher_status
      }
    }
  }
`
export const CONFIRM_PACKAGE_QUERY = gql`
  query confirmPackage($package_code: String!, $client_name: String!, $rut: String!, $client_phone: String!) {
    packages(
      distinct_on: id
      where: {
        package_code: { _eq: $package_code }
        client_name: { _eq: $client_name }
        client_identification_document: { _eq: $rut }
        client_phone: { _eq: $client_phone }
      }
    ) {
      id
    }
  }
`
