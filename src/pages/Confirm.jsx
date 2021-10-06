import { useParams, useHistory } from "react-router-dom";
import note from "../assents/note.png";
import handshake from "../assents/handshake.png";
import RatingMan from "../assents/man-calification.png"
import arrow from "../assents/arrow-left.svg";
import star from "../assents/star.svg";
import close from "../assents/close-icon.svg";


const Confirm = () => {
  const { id } = useParams()
  const history = useHistory()

  if (!id) {
    history.push('/check')
  }

  return (
    <div>
      <div className="confirm-header">
        <img src={arrow} alt="Arrow left"/>
        <img src={note} alt="Note icon"/>
      </div>
      <div className="calification-modal">
        <img src={close} alt="Close icon"/>
        <img src={RatingMan} alt="Delivery man"/>
        <img src={star} alt="Stars rating"/>
      </div>
      <div className="thanks-modal">
        <img src={close} alt="Close icon"/>
        <img src={handshake} alt="Handshake"/>
      </div>
    </div>
  )
}

export default Confirm
