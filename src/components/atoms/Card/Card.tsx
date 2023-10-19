import { Button } from "antd";
import "./Card.scss";
import { ChartUp, Bitcoin } from "../icons";

const Card = ({
  coinName,
  coinShortName,
  price,
}: {
  coinName: string;
  coinShortName: string;
  price: string;
}) => {
  return (
    // <div className="card">
    <div className="widgets__item">
      <div className="widgets__head">
        <div className="widgets__company">
          <div className="widgets__logo">
            <Bitcoin size={48} />
          </div>
          <div className="widgets__details">
            <div className="widgets__category">{coinName}</div>
            <div className="widgets__info">{coinShortName}</div>
          </div>
        </div>
        <div className="widgets__time">24H</div>
      </div>
      <div className="widgets__body">
        <div className="widgets__line">
          <div className="widgets__price">{price}USD</div>
          <div className="pl">+2.73%</div>
        </div>
        <div className="widgets__chart">
          <ChartUp />
        </div>
      </div>
      <Button className="widgets__btn">View Asset</Button>
    </div>
    // </div>
  );
};

export default Card;
