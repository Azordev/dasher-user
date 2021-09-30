import styled from 'styled-components';
import { breakpoints } from '../../../styles';

export const MapUpperBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--primary);
  width: 100%;
  height: 15%;
  padding: 1rem 4rem;

  position: absolute;
  top: 0;

  border-radius: 0px 0px 30px 30px;

  @media only screen and (max-width: ${breakpoints.breakpoints.md}) {
    height: 25%;
    width: 105%;
    padding: 0.5rem 1rem;

    border-radius: 0px 0px 40px 40px;
  }
`;

export default MapUpperBarStyle;
