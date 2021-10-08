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
        <Text as="h1" yellow medium>Recogiendo</Text>
        <Text>Nuestro Dasher esta recogiendo su envío...</Text>
        <img src={chat} alt="Chat"/>
      </div>
      <div className="delivery-footer">
        <img src={gps} alt="Gps icon"/>
        <Text></Text>
        <Text bold uppercase yellow>1 hora</Text>
        <Text>Tiempo estimado de llegada</Text>
        <img src={assistant} alt="Central Dasher"/>
        <Text>Central Dasher</Text>
      </div>
      <div className="modal-pick-up">
        <Text as="h1" small purple>El Dasher ha llegado</Text>
        <Text small danger>Recoja su envío</Text>
        <img src={send} alt="Send"/>
        <Text as="button" bold uppercase>Aceptar</Text>
      </div>
    </div>
  )
}

export default Delivery
