import { useParams, useHistory } from "react-router-dom";
import note from "../assets/note.png";
import handshake from "../assets/handshake.png";
import RatingMan from "../assets/man-calification.png"
import arrow from "../assets/arrow-left.svg";
import star from "../assets/star.svg";
import close from "../assets/close-icon.svg";


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
