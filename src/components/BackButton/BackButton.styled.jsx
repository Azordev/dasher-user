import styled from 'styled-components'

export const BackBtnContainer = styled.div`
  display: flex;
  width: 33.33vw;
`
export const BackBtn = styled.img`
  cursor: pointer;
  @media (max-width: 960px) {
    height: 100%;
    width: 33.33vw;
    padding-right: 15vw;
    max-width: 13rem;
  }

  @media (min-width: 961px) {
    height: 100%;
  }
`

export const BackTxt = styled.p`
  cursor: pointer;
  flex: 1;
  color: white;
  font-size: 1em;
  margin: auto 0;
  max-width: 10rem;
  ::before {
    content: '${props => props.txt}';
  }

  @media (max-width: 960px) {
    display: none;
  }

  @media (min-width: 961px) {
    font-size: 1.5em;
  }

  @media (min-width: 3180px) {
    font-size: 5em;
  }
`
