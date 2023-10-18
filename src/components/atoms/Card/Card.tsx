import {  Button, Divider } from "antd";
import "./Card.scss";
import { ChartUp ,Bitcoin} from "../icons";

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
    <div className="card">
      <div className="subCard">
        <div className="gridContainer">
          <div className="item1">
            <Bitcoin/>
          </div>
          <div className="item2">
            <div className="coinName">{coinName}</div>
            <div className="coinShortName">{coinShortName}</div>
          </div>
          <div className="item3">
            <Button className="hour">24H</Button>
          </div>
        </div>
        <Divider className="divider" />
        <div>
          <div className="contain">
            <div className="price">{price}USD</div>
            <div className="pl">+2.73%</div>
          </div>
          <div className="chart">
            <ChartUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
