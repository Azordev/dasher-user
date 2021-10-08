import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles';

export const MapLowerBarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.colors.blue08};
  width: 50%;
  height: 25%;
  padding: 2rem;

  position: relative;
  bottom: 0;

  transform: translateX(50%);

  border-radius: 30px 30px 0px 0px;

  @media only screen and (max-width: ${breakpoints.breakpoints.md}) {
    height: 35%;
    width: 105%;
    padding: 0.5rem;

    right: 50%;
    transform: translateX(48%);
    bottom: -30px;

    border-radius: 40px 40px 0px 0px;
  }
`;
