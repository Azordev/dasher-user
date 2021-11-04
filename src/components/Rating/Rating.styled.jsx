import styled from 'styled-components'
import star from '../../assets/star.svg'
import selectedStar from '../../assets/selected-star.svg'

const StarBtn = styled.img`
  display: inline-block;
  width: 32px;
  height: auto;
  margin: 5px;
  content: url(${star});
  &:hover {
    content: url(${selectedStar});
    width: 32px;
    height: auto;
  }
`

const SelectedStarBtn = styled.img`
  display: inline-block;
  width: 32px;
  height: auto;
  margin: 5px;
  content: url(${selectedStar});
`

export { StarBtn, SelectedStarBtn }
