import gql from "graphql-tag";

export const GET_PACKAGE_INFORMATION_SUBSCRIPTION = gql`
subscription getPackageInformation{
  packages(where: {package_id: {_eq: "hola"}}) {
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
  }
}

`;

