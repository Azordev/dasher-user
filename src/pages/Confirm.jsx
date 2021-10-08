import { useParams, useHistory } from "react-router-dom";
import { Text } from '../components/Text/Text';
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
        <Text title>Hemos terminado</Text>
        <Text as="p" white>Inserta tus datos para finalizar</Text>
        <img src={note} alt="Note icon"/>
        <Text as="p" text>Confirmar n° boleta o pedido</Text>
        <Text as="input" input placeholder="Nombre"/> 
        <Text as="input" input placeholder="RUT"/>  
        <Text as="input" input placeholder="Celular"/>  
        <Text as="button" button>Confrmar</Text>
      </div>
      <div className="calification-modal">
        <img src={close} alt="Close icon"/>
        <Text titleModal>¿Qué tal tu experiencia?</Text>
        <Text as="p" danger>La propina esta en tus manos</Text>
        <Text as="p" danger>Si deseas, puedes compartirla.</Text>
        <Text as="button" button>Aceptar</Text>
        <img src={RatingMan} alt="Delivery man"/>
        <img src={star} alt="Stars rating"/>
      </div>
      <div className="thanks-modal">
        <img src={close} alt="Close icon"/>
        <img src={handshake} alt="Handshake"/>
        <Text titleModal>¡Gracias por confiar en nosotros!</Text>
        <Text as="button" button>Aceptar</Text>
      </div>
    </div>
  )
}

export default Confirm
