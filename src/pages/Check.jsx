import { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

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
        <Text as="h1" color="secondary" medium>
          Hola!
        </Text>
        <Text small>Ingresa tu número de boleta</Text>
        <TicketImage src={ticket} alt="Ticket" />
      </Header>
      <MainSection>
        <div className="check-ticket">
          <Text color="secondary" bold uppercase>
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
          <Text color="danger">No olvides confirmar la recepción de este envío al final de este proceso ingresando:</Text>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: white;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background: blue;
  border-radius: 0 0 25px 25px;
`
const BackButton = styled.img`
  width: 30px;
  margin: 15px 8px;
`

const TicketImage = styled.img`
  width: 140px;
  align-self: flex-start;
  margin: 0 0 -13px 15px;
`

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-top: -100px;
`
