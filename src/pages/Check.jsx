
import { Text } from '../components/Text/Text';
import ticket from "../assets/ticket.png";
import warning from "../assets/warning.png";
import arrow from "../assets/arrow-left.svg";

const Check = () => (
  <div>
    <div className="header-ticket">
      <img src={arrow} alt="Arrow left"/>
      <Text title>Hola!</Text>
      <Text as="p" white>Ingresa tu número de boleta</Text>
      <img src={ticket} alt="Ticket"/>
    </div>
    <div className="check-ticket">
      <Text as="p" text>Confirmar n° boleta o pedido</Text>
      <Text as="input" input placeholder="Ingresa aquí..."/>
      <Text as="button" button>Confirmar</Text>
    </div>
    <div className="pop-up">
      <img src={warning} alt="Warning"/>
      <Text titleModal>Antes de recibir...</Text>
      <Text as="p" danger>No olvides confirmar la recepción<br/>de este envío al final de este<br/>proceso ingresando:</Text>
      <Text as="ul" primary>
        <li>Nombre</li>
        <li>RUT</li>
        <li>Celular</li>
      </Text>
      <Text as="button" button>Entendido</Text>
    </div>
  </div>
)

export default Check
