import { Button } from "antd";
import "./News.scss";

const News = () => {
  return (
    <div className="radient">
      <div className="content">
        <div className="month">November 2020</div>
        <div className="asset-heading">Asset Delistings Update</div>
        <div className="decription">
          The Grin blockchain has presented significant technical challenges.
        </div>
        <Button className="findOutBtn"> Find out more</Button>
      </div>
    </div>
  );
};

export default News;
