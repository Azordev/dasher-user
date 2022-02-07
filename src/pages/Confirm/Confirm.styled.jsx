import styled from 'styled-components'
import { Text } from '../../components'

export const RatingImg = styled.img`
  max-width: 100px;
  height: auto;
  margin: 1rem auto;
`

export const ConfirmText = styled(Text)`
  margin: 0px;
  line-height: 1.5;

  &:nth-child(2) {
    margin: 0px 0px 15px;
  }
`

export const CheckImg = styled.img`
  width: auto;
  margin: 0 30px;

  @media (max-width: 960px) {
    position: relative;
    height: 100px;
    bottom: 0;
  }

  @media (min-width: 961px) {
    position: absolute;
    width: 20vw;
    height: auto;
    bottom: 0;
    right: 50vw;
  }
`

export const HeaderContainer = styled.div`
  margin: 5vw;
`
