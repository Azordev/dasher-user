import styled, { css } from 'styled-components';
import { text } from '../../styles/mixins';


export const Text = styled.h1`
  //Title Home
  ${[text.secondary, text['4xl']]}

  //Title app
  ${props => props.title && css`
  ${[text.secondary, text['2xl']]};
  `}

  //Subtitles
  ${props => props.white && css`
    ${[text.white, text.base]};
  `}
  ${props => props.small && css`
    ${[text.white, text.xs]};
  `}
  
  //Title modals
  ${props => props.titleModal && css`
  ${[text.primary, text.base]};
  `}

  //Subtitles modals
  ${props => props.danger && css`
    ${[text.danger, text.xs]};
  `}
  ${props => props.primary && css`
    ${[text.primary, text.xs, text['600']]};
  `}

  //Button
  ${props => props.button && css`
    ${[text.white, text.xs, text['600']]};
    text-transform: uppercase;
  `}

  //Instruction text
  ${props => props.text && css`
    ${[text.secondary, text.xs, text['600']]};
    text-transform: uppercase;
  `} 

  //Input
  ${props => props.input && css`
  ${[text.xs, text['400']]}

  ::placeholder {
    color: #00000029
  }
  `} 

`
