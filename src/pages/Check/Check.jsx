import { useState } from 'react'
import { useHistory } from 'react-router'

import { Button, Input, Modal, Text } from '../../components'
import warning from '../../assets/warning.png'
import { useGetPackageInformation } from '../../hooks'

import Layout from './Check.layout'

const Check = () => {
  const [packageCode, setPackageCode] = useState('')
  const [isModalOpen, changeIsModalOpen] = useState(true)
  const history = useHistory()
  const { packageInformation } = useGetPackageInformation({ packageId: packageCode })

  const toDelivery = async e => {
    e.preventDefault()
    const { packages } = await packageInformation
    if ((await packages.length) > 0) {
      history.push(`/delivery/${packageCode}`)
    }

    alert('el packcode no existe')
  }

  return (
    <Layout
      headerTitle="Hola!"
      headerSubtitle="Ingresa tu número de boleta"
      DontForgetModal={
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
      }
    >
      <div className="check-ticket">
        <Text color="primary" bold uppercase>
          Confirmar n° boleta o pedido
        </Text>
        <Input placeholder="Ingresa aquí..." value={packageCode} onChange={e => setPackageCode(e.target.value)} />
        <Button onClick={e => toDelivery(e)}>Confirmar</Button>
      </div>
    </Layout>
  )
}

export default Check
