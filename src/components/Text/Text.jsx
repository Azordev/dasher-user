import styled from 'styled-components';
import { text } from '../../styles/mixins'

const Title = styled.h1`
  ${[text.test, text['4xl']]}
`
const Subtitle = styled.p`
  ${[text.base]}
  color: #ffffff;
`

const Button = styled.p`
  ${[text.xs, text['600']]}
  color: #ffffff;
`
const Welcome = styled.h1`
  ${[text.test, text['2xl']]}
`
const TextHeader = styled.p`
  ${[text.sm]}
  color: #ffffff;
`
const Label = styled.p`
  ${[text.test, text.xs, text['600']]}
`
const Hola = styled.input`
  ${[text.xs, text['400']]}

  ::placeholder {
    color: #00000029
  }
`
const TitleModal = styled.h1`
  ${[text.base]}
  color: #4513FE;
`
const TextModal = styled.p`
  ${[text.sm]}
  color:#727272;
` 
const List = styled.ul`
  ${[text.sm, text['500']]}
  color:#4513FE;
` 
const ButtonModal = styled.p`
  ${[text['600']]}
  font-size: 0.62rem;
  color: #ffffff;
`

export {
  Title, 
  Subtitle, 
  Button, 
  Welcome, 
  TextHeader, 
  Label, 
  Hola,
  TitleModal,
  TextModal,
  List,
  ButtonModal
};
