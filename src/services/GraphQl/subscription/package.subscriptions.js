import gql from 'graphql-tag'

export const GET_PACKAGE_INFORMATION_SUBSCRIPTION = gql`
  subscription getPackageInformation($package_code: String!) {
    packages(where: { package_code: { _eq: $package_code } }) {
      current_lat
      current_lon
      order_status
    }
  }
`
