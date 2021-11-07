import { useState } from 'react'
import { useHistory } from 'react-router'
import { Form, Modal, Text } from '../../components'
import warning from '../../assets/warning.png'
import { useGetPackagesIdByCode } from '../../hooks'
import Layout from './Check.layout'
import FormInput from '../../components/FormInput'

const Check = () => {
  const [packageCode, setPackageCode] = useState('')
  const [isModalOpen, changeIsModalOpen] = useState(true)
  const history = useHistory()
  const { packages, loading, error } = useGetPackagesIdByCode(packageCode?.packageCode)

  const toDelivery = async e => {
    if (e?.packageCode && !error && !loading) {
      const foundPackage = (await packages.length) > 0
      if (foundPackage) {
        const { id } = await packages[0]
        history.push(`/delivery/${id}`)
      } else {
        alert('el packcode no existe')
      }
    }
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
        <Form formData={setPackageCode} onSubmit={e => toDelivery(e)}>
          {({ handleFormChange, value }) => (
            <>
              <FormInput placeholder="Ingresa aquí..." name="packageCode" value={value} onChange={handleFormChange} />
            </>
          )}
        </Form>
      </div>
    </Layout>
  )
}

export default Check
