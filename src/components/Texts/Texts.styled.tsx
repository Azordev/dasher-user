import styled from 'styled-components';
import { colors, texts, breakpoints } from '../../styles';

const { '3xl': threeXL } = texts.text;

export const TitleLG = styled.div`
  ${threeXL};
  font-weight: bold;
  color: ${props => props.color || colors.colors.yellow05};

  @media only screen and (max-width: ${breakpoints.breakpoints.md}) {
    ${texts.text['2xl']};
  }
`;

export const Paragraph = styled.p`
  ${texts.text.base};
  color: ${props => props.color || 'white'};

  @media only screen and (max-width: ${breakpoints.breakpoints.md}) {
    ${texts.text.sm};
  }
`;

export const ParagraphWithoutMobile = styled.p`
  ${texts.text.base};
  color: ${props => props.color || 'white'};

  @media only screen and (max-width: ${breakpoints.breakpoints.md}) {
    ${texts.text.sm};
    display: none;
  }
`;

export const SubTitle = styled.p`
  ${texts.text['2xl']};
  line-height: 0;
  font-weight: bold;
  color: ${props => props.color || 'white'};

  @media only screen and (max-width: ${breakpoints.breakpoints.md}) {
    ${texts.text.xl};
    line-height: 0.25;
  }
`;
