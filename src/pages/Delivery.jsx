import { useParams, useHistory } from 'react-router-dom';
import assistant from "../assents/assistant.png";
import chat from "../assents/chat.png";
import send from "../assents/send.png";
import { MdArrowBackIos } from 'react-icons/md';


const Delivery = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }

  return (
    <section className="delivery-container">
      <div className="delivery-head">
        <h1>Delivery</h1>
        <MdArrowBackIos color={ "#fff" }/>
        <h2>Recogiendo</h2>
        <h5>Nuestro Dasher esta recogiendo su envío...</h5>
        <img src={chat} alt="Chat"/>
      </div>

      <div className="delivery-footer">
        <img src={assistant} alt="Central Dasher"/>
      </div>
      
      
      <img src={send} alt="Send"/>
      
    </section>
  )
}

export default Delivery
