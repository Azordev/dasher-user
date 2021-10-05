import { useParams, useHistory } from "react-router-dom";
import deliveryManPurple from "../assents/delivery-chat-purple.png";
import { FiStar } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Confirm = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }

  return (
    <div>
      <h1>Confirm</h1>
      <img src={deliveryManPurple} alt="Delivery man icon"/>
      <FiStar 
        color={ "#ffcc00" }
      />
      <AiOutlineClose
        color={ "#d5d5d5" }
      />
    </div>
  )
}

export default Confirm
