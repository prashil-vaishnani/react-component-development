import PriceCard from "../../atoms/PriceCard/PriceCard";
import {
  RecentlyCoin,
  Boxing,
  Potensial,
  Savings,
  TopGainer,
} from "../../atoms/icons";
import "./PriceCategory.scss";

const PriceCategory = () => {
  return (
    <div className="priceCategotyWrapper">
      <div className="priceCategotyWrapper_text">Categories</div>
      <div className="priceCategotyWrapper_cardWrapper">
        <PriceCard text="Recently Added" Icon={RecentlyCoin} />
        <PriceCard text="Top Gainers" Icon={Boxing} />
        <PriceCard text="Potential Coins" Icon={TopGainer} />{" "}
        <PriceCard text="Stable Coins" Icon={Savings} />
        <PriceCard text="Top Lossers" Icon={Potensial} />
      </div>
    </div>
  );
};

export default PriceCategory;
