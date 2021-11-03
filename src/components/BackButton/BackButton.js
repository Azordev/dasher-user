import { BackBtn, BackTxt, BackBtnContainer } from './BackButton.styled'
import { useParams, useHistory } from 'react-router-dom'
import arrow from '../../assets/arrow-left.svg'

const BackButton = () => {
  const { id } = useParams()
  const history = useHistory()
  const handleClick = () => {
    if (history.length > 1) {
      history.goBack()
    } else {
      if (id) {
        history.push(`/delivery/${id}`)
      } else {
        history.push('/check')
      }
    }
  }

  return (
    <BackBtnContainer onClick={() => handleClick()} test-id="Components/Modal">
      <BackBtn src={arrow} />
      <BackTxt txt={'Atrás'}></BackTxt>
    </BackBtnContainer>
  )
}

export default BackButton
