import styled from 'styled-components';
import { breakpoints } from '../../styles';

export const ImageControl = styled.img`
  max-width: ${props => `${props.maxWidth}px` || '100%'};

  @media only screen and (max-width: ${breakpoints.breakpoints.md}) {
    max-width: ${props => `${+props?.maxWidth * 0.8}px` || '100%'};
  }
`;
