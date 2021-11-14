import styled from 'styled-components'

export const BackBtnContainer = styled.div`
  display: flex;
  width: 33.33vw;
  max-height: 68px;

  @media (max-width: 960px) {
    padding-left: 15px;
  }

  @media (min-width: 961px) {
    margin-top: 0.5rem;
    padding-left: 10px;
  }
`
export const BackBtn = styled.img`
  cursor: pointer;
  position: relative;
  left: -15px;
  
  margin: 0;
  margin-bottom: 30px;

  @media (max-width: 960px) {
    height: 100%;
    width: 33.33vw;
    padding-right: 15vw;
    max-width: 5.5rem;
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
