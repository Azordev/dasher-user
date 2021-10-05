import ticket from "../assents/ticket.png";
import warning from "../assents/warning.png";
import { MdArrowBackIos } from "react-icons/md";
// import { AiOutlineClose } from 'react-icons/ai';

const Check = () => (
  <section className="check-container">
    <div className="check-head">
      <div className="check-welcome">
        <h1>Check</h1>
        <MdArrowBackIos color={ "#fff" }/>
        <h2>Hola!</h2>
        <h4>Ingresa tu número de boleta</h4>
        <img src={ticket} alt="Ticket"/>
      </div>
      <div className="check-ticket">
        <h4>CONFIRMAR Nº BOLETA O PEDIDO</h4>
        <input placeholder="Ingresa aquí..."></input>
        <button>CONFIRMAR</button>
      </div>
    </div>

    <div className="warning-modal">
      <img src={warning} alt="Warning"/>
      <h3>Antes de recibir...</h3>
      <p>No olvides confirmar la recepción de este envío al final de este proceso ingresando:</p>
      <ul style="list-style-type:none;">
        <li>*Nombre</li>
        <li>*RUT</li>
        <li>*Celular</li>
      </ul>
      <button>ENTENDIDO</button>
    </div>
    
  </section>
)

export default Check

// <AiOutlineClose color={ "#d5d5d5" }/>
