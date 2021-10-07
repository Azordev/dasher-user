import styled from 'styled-components';
import { text } from '../../styles/mixins';

export const Title = styled.h1`
  ${[text.test, text['4xl']]}
`
export const Subtitle = styled.p`
  ${[text.base]}
  color: #ffffff;
`
export const Button = styled.p`
  ${[text.xs, text['600']]}
  color: #ffffff;
`
export const TitleHeader = styled.h1`
  ${[text.test, text['2xl']]}
`
export const TextHeader = styled.p`
  ${[text.sm]}
  color: #ffffff;
`
export const Label = styled.p`
  ${[text.test, text.xs, text['600']]}
`
export const Input = styled.input`
  ${[text.xs, text['400']]}

  ::placeholder {
    color: #00000029
  }
`
export const TitleModal = styled.h1`
  ${[text.base]}
  color: #4513FE;
`
export const TextModal = styled.p`
  ${[text.sm]}
  color:#727272;
` 
export const List = styled.ul`
  ${[text.sm, text['500']]}
  color:#4513FE;
` 
export const ButtonModal = styled.p`
  ${[text['600']]}
  font-size: 0.62rem;
  color: #ffffff;
`
export const TitleDelivery = styled.h1`
  ${[text.test, text.xl]}
`
export const SubtitleDelivery = styled.p`
  font-size: 0.68rem;
  color: #ffffff;
`
export const TextUbication = styled.p`
  ${[text.test]}
  font-size: 0.68rem;
`

export const TextTime = styled.p`
  ${[text.test, text.sm]}
`

export const SubtitleTime = styled.p`
  font-size: 0.5rem;
  color: #ffffff;
`
;
