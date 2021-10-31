import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Modal, Text } from '../../components'
import handshake from '../../assets/handshake.png'
import RatingMan from '../../assets/man-rate.png'
import star from '../../assets/star.svg'
import close from '../../assets/close-icon.svg'

import Layout from './Confirm.layout'

const Confirm = () => {
  const { id } = useParams()
  const history = useHistory()
  const [isFinalModalOpen, changeFinalModalOpen] = useState(false)
  const [isRatingModalOpen, changeRatingModalOpen] = useState(false)

  if (!id) {
    history.push('/check')
  }

  return (
    <Layout
      headerTitle="Hemos terminado"
      RatingModal={
        <Modal isOpen={isRatingModalOpen} handleClick={() => changeFinalModalOpen(true)} actionText="Aceptar">
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
        </Modal>
      }
      FinalModal={
        <Modal isOpen={isFinalModalOpen} handleClick={() => history.push('/check')} actionText="Aceptar">
          <img src={handshake} alt="Handshake Image" />
          <Text as="h1" color="primary" medium center>
            !Gracias por confiar <br /> en nosotros!
          </Text>
        </Modal>
      }
    >
      <>
        <Text small>Inserta tus datos para finalizar</Text>
        <Text color="secondary" bold uppercase>
          Confirma recepción
        </Text>
        <Text as="input" placeholder="Nombre" />
        <Text as="input" placeholder="RUT" />
        <Text as="input" placeholder="Celular" />
        <Text as="button" bold uppercase onClick={() => changeRatingModalOpen(open)}>
          Confirmar
        </Text>
      </>
    </Layout>
  )
}

export default Confirm
