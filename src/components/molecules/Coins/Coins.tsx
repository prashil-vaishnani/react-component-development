import { Button } from "antd";
import Card from "../../atoms/Card/Card";
import "./Coins.scss";

const Coins = () => {
  return (
    <div className="wrapper">
      <div className="coins">
        <Card coinName={"Bitcoin"} coinShortName={"BTC"} price={"18,245.4 "} />
        <Card coinName={"Litcoin"} coinShortName={"LTC"} price={"18,245.4 "} />
        <Card coinName={"Steem"} coinShortName={"STM"} price={"18.245 "} />
        <Card coinName={"Token"} coinShortName={"TBX"} price={"0.2454 "} />
        <Card coinName={"Ripple"} coinShortName={"XRP"} price={"0.1824 "} />
        <Card coinName={"Ubex"} coinShortName={"UBW"} price={"0.5084 "} />
      </div>
      <Button className="moreBtn">Discover more assets</Button>
    </div>
  );
};

export default Coins;
