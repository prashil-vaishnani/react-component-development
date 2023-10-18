import { Input } from "antd";
import "./PriceBannner.scss";
import { PriceBackGround } from "../../../assets/Images";
const { Search } = Input;

const PriceBanner = () => {
  return (
    <div>
      <div className="priceRadient">
        <div className="priceContent">
          Search by token name, symbol, or address
        </div>
        <div className="priceAssetHeading">
          Find the best prices across exchange networked
        </div>
        <Search placeholder="Try ETH / BTC" className="InputFd" />
        <div className="ImageView">
          <img src={PriceBackGround} />
        </div>
      </div>
    </div>
  );
};

export default PriceBanner;
