import { useParams, useHistory } from 'react-router-dom'

const Delivery = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }

  return (
    <div>
      <h1>Delivery</h1>
    </div>
  )
}

export default Delivery
