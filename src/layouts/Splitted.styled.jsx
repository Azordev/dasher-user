import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: var(--white);

  @media (min-width: 960px) {
    flex-direction: row;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--primary);
  border-radius: 0 0 25px 25px;

  @media (min-width: 960px) {
    width: 50%;
    border-radius: 0000;
    justify-content: start;
    overflow: hidden;
  }
`

export const TicketImage = styled.img`
  width: 140px;
  align-self: flex-start;
  margin: 0 0 -13px 15px;

  @media (min-width: 960px) {
    width: 40vh;
    bottom: -38px;
    align-self: flex-end;
    position: fixed;
    margin-left: -50px;
  }
`
export const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media (min-width: 960px) {
    background: var(--secondary);
    width: 50%;
    height: 100vh;
    justify-content: center;
  }
`
