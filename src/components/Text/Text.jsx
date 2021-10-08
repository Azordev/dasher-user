import styled, { css } from 'styled-components';
import { text } from '../../styles/mixins';

export const Text = styled.p`
  // The most common
  ${[text.white, text.xs]}

  // Size
  ${props => props.small && css`
  ${text.base};
  `}

  ${props => props.medium && css`
  ${text['2xl']};
  `}

  ${props => props.large && css`
  ${text['4xl']};
  `}

  // Weight
  ${props => props.bold && css`
  ${text['600']};
  `}
  
  //Colors
  ${props => props.purple && css`
  ${text.primary};
  `}
  ${props => props.danger && css`
    ${text.danger};
  `}
  ${props => props.yellow && css`
  ${text.secondary};
  `}

  // Uppercase
  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
 
  //Input
  ${props => props.input && css`
  ::placeholder {
    color: #00000029
  }
  `} 

`
