import { Button } from "antd";
import BitChart from "../../atoms/icons/BitChart";
import "./CardList.scss";

const CardList = () => {
  return (
    <div className="cardList">
      <div className="subCardList">
        <div className="bitChart">
          <BitChart />
        </div>
        <div className="textBox">
          <div className="balance">Total Balance</div>
          <div>
            <Button className="btcBtn">BTC</Button>
          </div>
          <div className="btcPrice">0.16231428</div>
          <div className="totalBtc">3,700.96 USD</div>
          <Button className="withdraw">Withdraw</Button>
        </div>
      </div>
    </div>
  );
};

export default CardList;
