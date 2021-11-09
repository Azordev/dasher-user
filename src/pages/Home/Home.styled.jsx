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

  @media (min-width: 960px) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`
export const HalfSection = styled.div`
  ${props => `background-color: ${props.bg};`}
  ${props => `justify-content: ${props.fxJtyCt};`}
  ${props => `align-items: ${props.fxAlIt};`}
  ${props => `height: ${props.mobileHeight};`}

  display: flex;
  flex-direction: column;
  @media (min-width: 960px) {
    width: 100%;
    min-height: 100vh;
  }
`
export const Logo = styled.img`
  display: none;
  max-width: 30%;

  @media (min-width: 960px) {
    display: block;
    margin-top: 8%;
    margin-left: 8%;
  }
`
export const ManImage = styled.img`
  display: block;
  width: 70%;
  margin-top: 20%;

  object-fit: cover;
  position: absolute;
  transform: translateY(-80%);

  @media (min-width: 960px) {
    transform: translateY(0%);
    position: static;
    align-self: center;
    margin-top: 12%;
    height: 68vh;
  }
`
export const TextContainer = styled.div`
  transform: translateY(-80%);
  max-width: 100%;

  @media (min-width: 960px) {
    transform: translateY(0%);
    max-width: 70%;
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
    margin: 15px 0 15px 0;
    font-size: 2rem;
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

  @media (min-width: 960px) {
    transform: translate(0, 0);
    position: static;
    background-color: var(--secondary);
    height: 50%;
    width: 100%;
    padding: 1rem 0 3rem 0;
    font-weight: bold;
    font-size: 1.5rem;

    border-radius: 2rem;
    letter-spacing: 2px;
    transform: translate(0, 0);
  }
`
