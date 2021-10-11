import { useState } from 'react'
import { Modal } from '../components'

import { Text } from '../components/Text/Text'
import ticket from '../assets/ticket.png'
import warning from '../assets/warning.png'
import arrow from '../assets/arrow-left.svg'
import { useHistory } from 'react-router'

const Check = () => {
  const [isModalOpen, changeIsModalOpen] = useState(true)
  const history = useHistory();

  const toDelivery = (e) => {
    e.preventDefault()
    history.push('/delivery/lol')
  }

  return (
    <div>
      <div className="header-ticket">
        <img src={arrow} alt="Arrow left" />
        <Text as="h1" color="secondary" medium>
          Hola!
        </Text>
        <Text small>Ingresa tu número de boleta</Text>
        <img src={ticket} alt="Ticket" />
      </div>
      <div className="check-ticket">
        <Text color="secondary" bold uppercase>
          Confirmar n° boleta o pedido
        </Text>
        <Text as="input" placeholder="Ingresa aquí..." />
        <Text as="button" bold uppercase onClick={e=>toDelivery(e)}>
          Confirmar
        </Text>
      </div>
      <Modal isOpen={isModalOpen} handleClick={() => changeIsModalOpen(false)} actionText="Entendido">
        <img src={warning} alt="Warning" />
        <Text as="h1" color="primary" small>
          Antes de recibir...
        </Text>
        <Text color="danger">No olvides confirmar la recepción de este envío al final de este proceso ingresando:</Text>
        <Text as="ul" color="primary" bold>
          <li>Nombre</li>
          <li>RUT</li>
          <li>Celular</li>
        </Text>
      </Modal>
    </div>
  )
}

export default Check
