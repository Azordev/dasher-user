import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Text as OriginalText } from '../../components'
import text from '../../styles/text'

export const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;

  @media (min-width: 530px) and (min-height: 850px) {
    flex-wrap: wrap;
  }

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`
export const HalfSection = styled.div`
  ${props => `background-color: ${props.backgroundColor};`}
  ${props => `justify-content: ${props.justifyContent};`}
  ${props => `align-items: ${props.alignItems};`}
  ${props => `height: ${props.mobileHeight};`}
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 100%;
    min-height: 100vh;
  }
`
export const Logo = styled.img`
  display: none;
  max-width: 30%;

  @media (min-width: 768px) {
    display: block;
    margin-top: 8%;
    margin-left: 8%;
  }
`
export const ManImage = styled.img`
  display: block;
  width: 70%;
  margin-top: 20%;
  margin-bottom: -40%;
  object-fit: contain;
  position: absolute;
  transform: translateY(-80%);

  @media (max-width: 320px) {
    margin-top: 0;
  }

  @media (min-width: 600px) and (min-height: 850px) {
    margin-top: 35%;
  }

  @media (min-height: 700px) and (min-width: 375px) and (max-width: 600px) {
    margin-top: 25%;
  }

  @media (min-width: 768px) {
    transform: none;
    position: static;
    align-self: center;
    margin-top: 30%;
    height: 68vh;
  }

  @media (min-width: 960px) {
    margin-top: 12%;
  }

  @media (min-width: 1024px) and (min-height: 850px) {
    margin-top: 25%;
  }

  @media (min-width: 1024px) and (max-height: 950px) {
    margin-top: 15%;
  }
`
export const TextContainer = styled.div`
  transform: translateY(-80%);
  max-width: 100%;

  @media (min-width: 600px) and (min-height: 850px) {
    margin-top: 10rem;
  }

  @media (min-width: 768px) {
    transform: none;
    max-width: 70%;
  }

  @media (min-height: 700px) and (min-width: 375px) and (max-width: 600px) {
    margin-top: 30%;
  }
`

export const Text = styled(OriginalText)`
  ${[text.textCenter]}
  ${props => props.title && text['7xl']}
`
export const DisplayText = styled(Text)`
  font-size: 3rem;
  text-align: left;
  margin: 3rem 0 5px -5px;

  @media (min-width: 768px) {
    font-size: 5rem;
    text-align: left;
    margin: 2rem 0 30px 30px;
  }

  @media (min-width: 960px) {
    font-size: 6.5rem;
    text-align: left;
    margin: 10px 0 30px -5px;
  }
`

export const SubtitleText = styled(Text)`
  margin-top: 3px;
  font-size: 1rem;

  @media (min-width: 960px) {
    margin: 15px 0;
    font-size: 2rem;
    line-height: 30px;
  }

  @media (min-width: 768px) {
    margin: 15px 0;
    font-size: 1.5rem;
    line-height: 30px;
  }
`
export const Button = styled(Link)`
  background: var(--primary);
  border-radius: 20px;
  border: none;
  color: var(--white);
  height: 100%;
  width: 70%;
  max-height: 40px;
  align-items: center;
  justify-content: center;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  line-height: 40px;
  font-weight: bold;
  position: relative;
  transform: translate(0%, 1100%);

  @media (max-width: 320px) {
    transform: translate(0%, 900%);
  }

  @media (min-height: 700px) and (min-width: 375px) and (max-width: 600px) {
    transform: translate(0%, 1200%);
  }

  @media (min-width: 600px) and (min-height: 850px) {
    transform: translate(0%, 1600%);
    margin-top: 25%;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: ${props => props.webDisplay ?? 'block'};
    background: ${props => (props.webDisplay ? 'var(--primary);' : 'var(--secondary);')};
    width: ${props => (props.webDisplay ? '70%;' : '100%;')};
    height: 50%;
    position: static;
    padding: 0.5rem 0 3rem 0;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 2rem;
    letter-spacing: 2px;
    transform: none;
  }

  @media (min-width: 960px) {
    padding: 1rem 0 3rem 0;
  }
`
