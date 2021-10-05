import { useParams, useHistory } from "react-router-dom";
import deliveryManWhite from "../assents/delivery-chat-white.png";
import deliveryManPurple from "../assents/delivery-chat-purple.png";
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
      <img src={deliveryManPurple} alt="Delivery man icon"/>
      <img src={userIcon} alt="User icon"/>
    </div>
  )
}

export default Chat
