
import { Text } from '../components/Text/Text';
import ticket from "../assets/ticket.png";
import warning from "../assets/warning.png";
import arrow from "../assets/arrow-left.svg";

const Check = () => (
  <div>
    <div className="header-ticket">
      <img src={arrow} alt="Arrow left"/>
      <Text as="h1" yellow medium>Hola!</Text>
      <Text small>Ingresa tu número de boleta</Text>
      <img src={ticket} alt="Ticket"/>
    </div>
    <div className="check-ticket">
      <Text bold uppercase yellow>Confirmar n° boleta o pedido</Text>
      <Text as="input" placeholder="Ingresa aquí..."/>
      <Text as="button" bold uppercase>Confirmar</Text>
    </div>
    <div className="pop-up">
      <img src={warning} alt="Warning"/>
      <Text as="h1" small purple>Antes de recibir...</Text>
      <Text danger>No olvides confirmar la recepción<br/>de este envío al final de este<br/>proceso ingresando:</Text>
      <Text as="ul" bold purple>
        <li>Nombre</li>
        <li>RUT</li>
        <li>Celular</li>
      </Text>
      <Text as="button" bold uppercase>Entendido</Text>
    </div>
  </div>
)

export default Check
