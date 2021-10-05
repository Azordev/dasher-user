import { useParams, useHistory } from 'react-router-dom';
import assistant from "../assents/assistant.png";
import chat from "../assents/chat.png";
import send from "../assents/send.png";
import arrow from "../assents/arrow-left.svg";
import gps from "../assents/gps-icon.svg";


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
