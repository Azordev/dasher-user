import { useParams, useHistory } from "react-router-dom";

const Chat = () => {
  const { id } = useParams();
  const history = useHistory();

  if (!id) {
    history.push("/check");
  }

  return (
    <div>
      <h1>Chat</h1>
    </div>
  )
}

export default Chat
