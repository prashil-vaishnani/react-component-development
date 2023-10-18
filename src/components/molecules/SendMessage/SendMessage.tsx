import { Button } from "antd";
import "./SendMessage.scss";

const SendMessage = () => {
  return (
    <div className="sendMessageWrapper">
      <div className="sendMessageText">Send Cryto to An Email Address</div>
      <Button className="sendMessageButton">Send Now</Button>
    </div>
  );
};

export default SendMessage;
