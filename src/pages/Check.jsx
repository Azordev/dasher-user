import { useState } from 'react'
import { useHistory } from 'react-router'
import { Container, Header, BackButton, TicketImage, MainSection } from '../components/SplittedLayout'

import { Button, Input, Modal, Text } from '../components'
import ticket from '../assets/ticket.png'
import warning from '../assets/warning.png'
import arrow from '../assets/arrow-left.svg'

const Check = () => {
  const [packageCode, setPackageCode] = useState('')
  const [isModalOpen, changeIsModalOpen] = useState(true)
  const history = useHistory()

  const toDelivery = e => {
    e.preventDefault()
    history.push('/delivery/test')
  }

  return (
    <Container>
      <Header className="header-ticket">
        <BackButton src={arrow} alt="Arrow left" />
        <Text className="heading-text" as="h1" color="secondary" medium>
          Hola!
        </Text>
        <Text className="heading-subtext" small>
          Ingresa tu número de boleta
        </Text>
        <TicketImage src={ticket} alt="Ticket" />
      </Header>
      <MainSection>
        <div className="check-ticket">
          <Text color="secondary" bold uppercase colorDesk>
            Confirmar n° boleta o pedido
          </Text>
          <Input placeholder="Ingresa aquí..." value={packageCode} onChange={e => setPackageCode(e.target.value)} />
          <Button onClick={e => toDelivery(e)}>Confirmar</Button>
        </div>
        <Modal isOpen={isModalOpen} handleClick={() => changeIsModalOpen(false)} actionText="Entendido">
          <img src={warning} alt="Warning" />
          <Text as="h1" color="primary" small>
            Antes de recibir...
          </Text>
          <Text color="danger">
            No olvides confirmar la recepción de este envío al final de este proceso ingresando:
          </Text>
          <Text as="ul" color="primary" bold>
            <li>Nombre</li>
            <li>RUT</li>
            <li>Celular</li>
          </Text>
        </Modal>
      </MainSection>
    </Container>
  )
}

export default Check
