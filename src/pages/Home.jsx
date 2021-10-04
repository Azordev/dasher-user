import styled from "styled-components"
import { text, bg } from "../styles/mixins"
import { useQuery } from "@apollo/client";
import { GET_PACKAGE_INFORMATION_QUERY } from "../services/GraphQl/queries";
import PropTypes from 'prop-types';
const Title = styled.h1`
  ${ [text.test, text['4xl']] }
  ${ bg.primary }
`



const GetPackageInformationQuery = (props) => {

  const {packageId} = props;
  console.log(packageId)
  const {loading, error, data} = useQuery(GET_PACKAGE_INFORMATION_QUERY, {
    variables: {"package_id": packageId},
  });


    if (loading) return <pre>Loading</pre>
    if (error)
      return (
        <pre>
          Error in GET_PACKAGE_INFORMATION_QUERY
          {JSON.stringify(error, null, 2)}
        </pre>
      );

    if (data) {
      return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )
    }

  

};


const Home = () => (
  <div>
    <Title>Home</Title>
    <GetPackageInformationQuery packageId={"hola"} />
  </div>
)

GetPackageInformationQuery.propTypes = {
  packageId: PropTypes.string,
};

export default Home
