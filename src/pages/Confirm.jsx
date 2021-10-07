import { useParams, useHistory } from "react-router-dom";
import { TitleHeader, TextHeader, Label, Input, Button, TitleModal, TextModal, ButtonModal } from '../components/Text/Text';
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
        <TitleHeader>Hemos terminado</TitleHeader>
        <TextHeader>Inserta tus datos para finalizar</TextHeader>
        <img src={note} alt="Note icon"/>
        <Label>CONFIRMAR N° BOLETA O PEDIDO</Label>
        <Input placeholder="Nombre"></Input>
        <Input placeholder="RUT"></Input>
        <Input placeholder="Celular"></Input>
        <Button>CONFIRMAR</Button>
      </div>
      <div className="calification-modal">
        <img src={close} alt="Close icon"/>
        <TitleModal>¿Qué tal tu experiencia?</TitleModal>
        <TextModal>La propina esta en tus manos</TextModal>
        <TextModal>Si deseas, puedes compartirla.</TextModal>
        <ButtonModal>ACEPTAR</ButtonModal>
        <img src={RatingMan} alt="Delivery man"/>
        <img src={star} alt="Stars rating"/>
      </div>
      <div className="thanks-modal">
        <img src={close} alt="Close icon"/>
        <img src={handshake} alt="Handshake"/>
        <TitleModal>¡Gracias por confiar en nosotros!</TitleModal>
        <ButtonModal>ACEPTAR</ButtonModal>
      </div>
    </div>
  )
}

export default Confirm
