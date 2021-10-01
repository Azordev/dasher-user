import { useParams, useHistory } from 'react-router-dom'

const Confirm = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }

  return (
    <div>
      <h1>Confirm</h1>
    </div>
  )
}

export default Confirm
