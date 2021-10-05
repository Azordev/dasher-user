import { useParams, useHistory } from "react-router-dom";
import deliveryManWhite from "../assents/delivery-chat-white.png";
import assistant from "../assents/asistant-chat.png";
import sendButton from "../assents/send-chat.png";
import userIcon from "../assents/user-icon.png";

const Chat = () => {
  const { id } = useParams();
  const history = useHistory();

  if (!id) {
    history.push("/check");
  }

  return (
    <div>
      <h1>Chat</h1>
      <img src={deliveryManWhite} alt="Delivery man icon"/>
      <img src={assistant} alt="Asistant icon"/>
      <img src={userIcon} alt="User icon"/>
      <img src={sendButton} alt="Send button"/>
    </div>
  )
}

export default Chat
