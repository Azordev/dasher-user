import { useParams, useHistory } from 'react-router-dom';
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
        <img src={chat} alt="Chat"/>
      </div>
      <div className="delivery-footer">
        <img src={gps} alt="Gps icon"/>
        <img src={assistant} alt="Central Dasher"/>
      </div>
      <div className="modal-pick-up">
        <img src={send} alt="Send"/>
      </div>
    </div>
  )
}

export default Delivery
