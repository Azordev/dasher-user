import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Form, FormContext, Modal, Text } from '../components'
import note from '../assets/note.png'
import handshake from '../assets/handshake.png'
import RatingMan from '../assets/man-rate.png'
import arrow from '../assets/arrow-left.svg'
import star from '../assets/star.svg'
import close from '../assets/close-icon.svg'

import FormInput from '../components/FormInput'

const Confirm = () => {
  const { id } = useParams()
  const history = useHistory()
  const [isModalOpen, changeIsModalOpen] = useState(false)

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
        <Form onSubmit={() => changeIsModalOpen(true)}>
          <FormContext.Consumer>
            {({ handleFormChange, value }) => (
              <>
                <FormInput label="Nombre" name="clientName" value={value} onChange={handleFormChange} />
                <FormInput label="RUT" name="rutNumber" value={value} onChange={handleFormChange} />
                <FormInput label="Celular" name="cellPhone" value={value} onChange={handleFormChange} />
              </>
            )}
          </FormContext.Consumer>
        </Form>
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
      <Modal isOpen={isModalOpen} handleClick={() => changeIsModalOpen(false)} actionText="Aceptar">
        <img src={handshake} alt="Handshake Image" />
        <Text as="h1" color="primary" medium center>
          !Gracias por confiar <br /> en nosotros!
        </Text>
      </Modal>
    </div>
  )
}

export default Confirm
