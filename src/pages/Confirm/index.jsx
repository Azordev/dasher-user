// @ts-nocheck
/* cSpell:disable */
import { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Modal, Text, Rating, Form, FormInput } from '../../components'
import handshake from '../../assets/handshake.png'
import RatingMan from '../../assets/man-rate.png'
import { InsertClientRate, useConfirmPackage } from '../../hooks'
import Layout from './Confirm.layout'
import { RatingImg } from './Confirm.styled'

const Confirm = () => {
  const { id } = useParams()
  const history = useHistory()
  const [isFinalModalOpen, toggleFinalModal] = useState(false)
  const [isRatingModalOpen, toggleRatingModal] = useState(false)
  const [rating, setRating] = useState(0)
  const { insertClientRate } = InsertClientRate()
  const { confirmPackage, packageInformation } = useConfirmPackage()

  if (!id) {
    history.push('/check')
  }

  useEffect(() => {
    if (packageInformation.length > 0) {
      toggleRatingModal(true)
    }
  }, [packageInformation])

  /** @param {Event} event */
  const submitRating = event => {
    event.preventDefault()
    // Submit rating here
    if (rating) {
      insertClientRate({ variables: { id, clientRating: rating } })
      toggleRatingModal(false)
      toggleFinalModal(true)
    }
  }

  /** @param {React.FormEvent<HTMLFormElement>} event */
  const submitConfirmation = async event => {
    // Submit form here
    if (event.name && event.RUT && event.phone) {
      confirmPackage(event, id)
    } else {
      alert('Por favor complete los campos')
    }
  }

  return (
    <Layout
      headerTitle="Hemos terminado"
      headerSubTitle="Inserta tus datos para finalizar"
      RatingModal={
        <Modal isOpen={isRatingModalOpen} handleClick={submitRating} actionText="Aceptar">
          <Text as="h1" color="primary">
            ¿Qué tal tu experiencia?
          </Text>
          <Text small>La propina esta en tus manos</Text>
          <Text>Si deseas, puedes compartirla.</Text>
          <RatingImg src={RatingMan} alt="Delivery man" />
          <Rating setRating={setRating} />
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
        <Text color="primary" bold uppercase>
          Confirma recepción
        </Text>
        <Form onSubmit={e => submitConfirmation(e)}>
          {({ handleFormChange, value }) => (
            <>
              <FormInput placeholder="Nombre" name="name" value={value} onChange={handleFormChange} />
              <FormInput placeholder="RUT" name="RUT" value={value} onChange={handleFormChange} />
              <FormInput placeholder="Celular" name="phone" value={value} onChange={handleFormChange} />
            </>
          )}
        </Form>
      </>
    </Layout>
  )
}

export default Confirm
