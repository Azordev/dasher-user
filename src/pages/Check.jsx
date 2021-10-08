import ticket from '../assents/ticket.png'
import warning from '../assents/warning.png'
import arrow from '../assents/arrow-left.svg'

const Check = () => (
  <div>
    <div className="check-ticket">
      <img src={arrow} alt="Arrow left" />
      <img src={ticket} alt="Ticket" />
    </div>
    <div className="pop-up">
      <img src={warning} alt="Warning" />
    </div>
  </div>
)

export default Check
