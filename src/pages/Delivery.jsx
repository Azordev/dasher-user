import { useParams, useHistory } from 'react-router-dom';
import { TitleDelivery, SubtitleDelivery, TextUbication, TextTime, SubtitleTime, TitleModal, TextModal, ButtonModal } from '../components/Text/Text';
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
        <TitleDelivery>Recogiendo</TitleDelivery>
        <SubtitleDelivery>Nuestro Dasher esta recogiendo su envío...</SubtitleDelivery>
        <img src={chat} alt="Chat"/>
      </div>
      <div className="delivery-footer">
        <img src={gps} alt="Gps icon"/>
        <TextUbication></TextUbication>
        <TextTime></TextTime>
        <SubtitleTime>Tiempo estimado de llegada</SubtitleTime>
        <img src={assistant} alt="Central Dasher"/>
        <SubtitleDelivery>Central Dasher</SubtitleDelivery>
      </div>
      <div className="modal-pick-up">
        <TitleModal>El Dasher ha llegado</TitleModal>
        <TextModal>Recoja su envío</TextModal>
        <img src={send} alt="Send"/>
        <ButtonModal>ACEPTAR</ButtonModal>
      </div>
    </div>
  )
}

export default Delivery
