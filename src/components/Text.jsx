import styled, { css } from 'styled-components'
import { text } from '../styles/mixins'

const Text = styled.p`
  // The most common
  ${[text.white, text.xs]}

  // Size
  ${props =>
    props.small &&
    css`
      ${text.base};
    `}

  ${props =>
    props.medium &&
    css`
      ${text['2xl']};
    `}

  ${props =>
    props.large &&
    css`
      ${text['4xl']};
    `}

  // Weight
  ${props =>
    props.bold &&
    css`
      ${text['600']};
    `}
  
  //Colors
  ${props =>
    props.color &&
    css`
      ${text[props.color] || `color: ${props.color}`};
    `}

  // Uppercase
  ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}
 
  //Input
  ${props =>
    props.input &&
    css`
      ::placeholder {
        color: #00000029;
      }
    `}
    ${props =>
    props.colorDesk &&
    css`
    @media (min-width: 960px){
      ${text.primary};
    }
    `}
`

export default Text
