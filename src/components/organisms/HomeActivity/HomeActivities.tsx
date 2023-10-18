import {
  ArrowRight,
  CurrencyExchange,
  MenuThreeDots,
  MoneyBag,
  MoneyCash,
} from "../../atoms/icons";
import ActivitiesCard from "../../molecules/ActivitiesCard/ActivitiesCard";
import "./HomeActivities.scss";

const HomeActivities = () => {
  return (
    <div className="homeActivitiesWrapper">
      <div className="activitiesHeading">
        <div className="activitiesHeadingText">Latest Activities</div>
        <div>
          <MenuThreeDots />
        </div>
      </div>
      <div className="activitiesListing">
        <ActivitiesCard
          Icon={MoneyBag}
          activitiesType="Withdrew USDT"
          activitiesTotal="969.06654889 USDT"
        />
        <ActivitiesCard
          Icon={CurrencyExchange}
          activitiesType="Exchange XRP"
          activitiesTotal="2405.15865955 XRP"
        />
        <ActivitiesCard
          Icon={MoneyCash}
          activitiesType="Deposit BTC"
          activitiesTotal="0.206654889 BTC"
        />
        <ActivitiesCard
          Icon={MoneyBag}
          activitiesType="Withdrew USDT"
          activitiesTotal="969.06654889 USDT"
        />
        <ActivitiesCard
          Icon={CurrencyExchange}
          activitiesType="Exchange XRP"
          activitiesTotal="2405.15865955 XRP"
        />
      </div>
      <div className="activitiesFooter">
        <div className="activitiesFooterIcon"><ArrowRight/></div>
        <div className="activitiesFooterText">View all activity</div>
      </div>
    </div>
  );
};

export default HomeActivities;
