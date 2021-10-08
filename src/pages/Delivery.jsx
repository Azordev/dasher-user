import { useParams, useHistory } from 'react-router-dom';
import { Text } from '../components/Text/Text';
import assistant from "../assets/assistant.png";
import chat from "../assets/chat.png";
import send from "../assets/send.png";
import arrow from "../assets/arrow-left.svg";
import gps from "../assets/gps-icon.png";


const Delivery = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }

  return (
    <div>
      <div className="delivery-header">
        <img src={arrow} alt="Arrow left"/>
        <Text title>Recogiendo</Text>
        <Text as="p" small>Nuestro Dasher esta recogiendo su envío...</Text>
        <img src={chat} alt="Chat"/>
      </div>
      <div className="delivery-footer">
        <img src={gps} alt="Gps icon"/>
        <Text></Text>
        <Text text>1 hora</Text>
        <Text as="p" small>Tiempo estimado de llegada</Text>
        <img src={assistant} alt="Central Dasher"/>
        <Text as="p" small>Central Dasher</Text>
      </div>
      <div className="modal-pick-up">
        <Text titleModal>El Dasher ha llegado</Text>
        <Text as="p" danger>Recoja su envío</Text>
        <img src={send} alt="Send"/>
        <Text as="button" button>Aceptar</Text>
      </div>
    </div>
  )
}

export default Delivery
