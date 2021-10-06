
import { Welcome, TextHeader, Label, Hola, Button, TitleModal, TextModal, List, ButtonModal } from '../components/Text/Text';
import ticket from "../assets/ticket.png";
import warning from "../assets/warning.png";
import arrow from "../assets/arrow-left.svg";

const Check = () => (
  <div>
    <div className="check-ticket">
      <img src={arrow} alt="Arrow left"/>
      <Welcome>Hola!</Welcome>
      <TextHeader>Ingresa tu número de boleta</TextHeader>
      <img src={ticket} alt="Ticket"/>
      <Label>CONFIRMAR N° BOLETA O PEDIDO</Label>
      <Hola placeholder="Ingresa aquí..."></Hola>
      <Button>CONFIRMAR</Button>
    </div>
    <div className="pop-up">
      <img src={warning} alt="Warning"/>
      <TitleModal>Antes de recibir...</TitleModal>
      <TextModal>No olvides confirmar la recepción<br/>de este envío al final de este<br/>proceso ingresando:</TextModal>
      <List>
        <li type="none">*Nombre</li>
        <li type="none">*RUT</li>
        <li type="none">*Celular</li>
      </List>
      <ButtonModal>ENTENDIDO</ButtonModal>
    </div>
  </div>
)

export default Check
