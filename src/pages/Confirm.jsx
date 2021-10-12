import { useParams, useHistory } from 'react-router-dom'
import { Text } from '../components'
import note from '../assets/note.png'
import handshake from '../assets/handshake.png'
import RatingMan from '../assets/man-rate.png'
import arrow from '../assets/arrow-left.svg'
import star from '../assets/star.svg'
import close from '../assets/close-icon.svg'

const Confirm = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }

  return (
    <div>
      <div className="confirm-header">
        <img src={arrow} alt="Arrow left" />
        <Text as="h1" color="secondary" medium>
          Hemos terminado
        </Text>
        <Text small>Inserta tus datos para finalizar</Text>
        <img src={note} alt="Note icon" />
        <Text color="secondary" bold uppercase>
          Confirma recepción
        </Text>
        <Text as="input" placeholder="Nombre" />
        <Text as="input" placeholder="RUT" />
        <Text as="input" placeholder="Celular" />
        <Text as="button" bold uppercase>
          Confirmar
        </Text>
      </div>
      <div className="rate-modal">
        <img src={close} alt="Close icon" />
        <Text as="h1" color="primary" small>
          ¿Qué tal tu experiencia?
        </Text>
        <Text color="danger" small>
          La propina esta en tus manos
        </Text>
        <Text color="danger">Si deseas, puedes compartirla.</Text>
        <Text as="button" bold uppercase>
          Aceptar
        </Text>
        <img src={RatingMan} alt="Delivery man" />
        <img src={star} alt="Stars rating" />
      </div>
      <div className="thanks-modal">
        <img src={close} alt="Close icon" />
        <img src={handshake} alt="Handshake" />
        <Text as="h1" color="primary" small>
          ¡Gracias por confiar en nosotros!
        </Text>
        <Text as="button" bold uppercase>
          Aceptar
        </Text>
      </div>
    </div>
  )
}

export default Confirm
