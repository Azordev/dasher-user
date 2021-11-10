import styled from 'styled-components'
import { Text } from '../../components'

export const CheckText = styled(Text)`
  margin: 0;

  @media (min-width: 960px) {
    font-size: 6rem;
    margin-top: 10rem;
    margin-bottom: 1.2rem;
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
export const TextHandlerColorMobile = styled(Text)`
  @media (min-width: 960px) {
    color: var(--primary);
    font-weight: bold;
    font-size: 1.3rem;
  }
`