import gql from "graphql-tag";

export const GET_PACKAGE_INFORMATION_QUERY = gql`
query getPackageInformation($package_id: String = "") {
  packages(where: {package_id: {_eq: $package_id}}) {
    client_address
    client_identification_document
    client_name
    client_phone
    current_lat
    current_lon
    order_status
    package_company {
      company_address
      company_name
    }
    package_dasher {
      dasher_name
      dasher_phone
      dasher_status
    }
    package_id
  }
}
`;

