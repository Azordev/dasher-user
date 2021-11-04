import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Modal, Text } from '../../components'
import handshake from '../../assets/handshake.png'
import RatingMan from '../../assets/man-rate.png'
import close from '../../assets/close-icon.svg'

import Rating from '../../components/Rating'

import Layout from './Confirm.layout'

const Confirm = () => {
  const { id } = useParams()
  const history = useHistory()
  const [isFinalModalOpen, toggleFinalModal] = useState(false)
  const [isRatingModalOpen, toggleRatingModal] = useState(false)

  if (!id) {
    history.push('/check')
  }

  const submitConfirmation = event => {
    event.preventDefault()
    // SUbmit confirmation here
    toggleRatingModal(true)
  }

  const submitRating = event => {
    event.preventDefault()
    // Submit rating here
    toggleRatingModal(false)
    toggleFinalModal(true)
  }

  return (
    <Layout
      headerTitle="Hemos terminado"
      RatingModal={
        <Modal isOpen={isRatingModalOpen} handleClick={submitRating} actionText="Aceptar">
          <img width="15px" src={close} alt="Close icon" />
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
          <Rating />
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
        <Text as="button" bold uppercase onClick={submitConfirmation}>
          Confirmar
        </Text>
      </>
    </Layout>
  )
}

export default Confirm
