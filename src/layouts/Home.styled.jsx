import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 55%;
  background-color: var(--primary);
  display: block;
  margin: 0 auto;

  @media (min-width: 960px) {
    position: fixed;
    margin-left: 50%;
    width: 50%;
    height: 100%;
    background-color: var(--primary);
  }
`
export const ManImage = styled.img`
  display: block;
  margin: 0 auto;
  height: 65vh;

  @media (min-width: 960px) {
    margin-left: -100%;
  }
`

export const Button = styled(Link)`
  background: var(--primary);
  border-radius: 20px;
  border: none;
  color: var(--white);
  height: 100%;
  max-height: 40px;
  width: 30%;
  align-items: center;
  justify-content: center;
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  line-height: 40px;

  @media (min-width: 960px) {
    margin-top: -40%;
    background-color: var(--secondary);
  }
`

export const Logo = styled.img`
  display: none;

  @media (min-width: 960px) {
    margin-left: -100%;
    display: block;
    margin-top: 10%;
  }
`
