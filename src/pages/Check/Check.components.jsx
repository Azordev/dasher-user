import styled from 'styled-components'
import { Text } from '../../components'

export const CheckText = styled(Text)`
  margin: 0;

  @media (min-width: 960px) {
    font-size: 3.5rem;
    margin-top: 10rem;
  }
`

export const CheckTextSubtitle = styled(Text)`
  margin: 0;
  font-weight: bold;

  @media (min-width: 960px) {
    font-size: 2rem;
    margin-top: 2rem;
  }
`
