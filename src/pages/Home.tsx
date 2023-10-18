import { Divider } from "antd";
import CardList from "../components/molecules/CardList/CardList";
import News from "../components/molecules/news/News";
import HomeAssets from "../components/organisms/HomeAssets/HomeAssets";
import HomeActivities from "../components/organisms/HomeActivity/HomeActivities";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="Home">
        <News />
        <HomeAssets />
      </div>
      <Divider type="vertical" className="divider" />
      <div className="cardWrapper">
        <CardList />
        <HomeActivities />
      </div>
    </div>
  );
};

export default Home;
