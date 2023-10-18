import { useState } from "react";
import { Layout, Menu, Button, Switch } from "antd";
import { Link, useLocation } from "react-router-dom";
import { BulbOutlined } from "@ant-design/icons";

import Logo from "../../atoms/logo/Logo";
import {
  HomeIcon,
  ActivitiesIcon,
  ExchangeSBIcon,
  NotificationsIcon,
  PricesIcon,
  PromotionsIcon,
  SettingsIcon,
  WalletsIcon,
  CollapsedIcon,
  Bulb,
} from "../../atoms/icons/index";
import "./SideBar.scss";
import { PAGE_PATHS } from "../../../routes/path";
import { SidemenuNameIndexMap } from "../../../utils/contants";
import { getPathname } from "../../../utils/helpers";
import SendMessage from "../SendMessage/SendMessage";

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  console.log(collapsed, "ddddddd");
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <Sider
      theme={"light"}
      width={256}
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={80}
    >
      <div className="customSidebar">
        <div className="topSideBar">
          <div className="logoWrapper">
            <Logo />
            <Button
              type="text"
              icon={<CollapsedIcon />}
              onClick={() => setCollapsed(!collapsed)}
              className="collapsed"
            />
          </div>
          <Menu
            theme="light"
            mode="inline"
            onClick={({ key }) => console.log(key)}
            defaultSelectedKeys={["1"]}
            selectedKeys={[
              SidemenuNameIndexMap[getPathname(location.pathname)],
            ]}
            items={[
              {
                key: "1",
                icon: (
                  <Link to={PAGE_PATHS.Home}>
                    <HomeIcon />
                  </Link>
                ),
                label: <Link to={PAGE_PATHS.Home}> Home</Link>,
              },
              {
                key: "2",
                icon: (
                  <Link to={PAGE_PATHS.Exchange}>
                    <ExchangeSBIcon />
                  </Link>
                ),
                label: <Link to={PAGE_PATHS.Exchange}>Exchange</Link>,
              },
              {
                key: "3",
                icon: (
                  <Link to={PAGE_PATHS.Prices}>
                    <PricesIcon />
                  </Link>
                ),
                label: <Link to={PAGE_PATHS.Prices}>Prices</Link>,
              },
              {
                key: "4",
                icon: (
                  <Link to={PAGE_PATHS.Wallets}>
                    <WalletsIcon />
                  </Link>
                ),
                label: <Link to={PAGE_PATHS.Wallets}>Wallets</Link>,
              },
              {
                key: "5",
                icon: (
                  <Link to={PAGE_PATHS.Promotions}>
                    <PromotionsIcon />
                  </Link>
                ),
                label: <Link to={PAGE_PATHS.Promotions}>Promotions</Link>,
              },
              {
                key: "6",
                icon: (
                  <Link to={PAGE_PATHS.Activities}>
                    <ActivitiesIcon />
                  </Link>
                ),
                label: <Link to={PAGE_PATHS.Activities}>Activities</Link>,
              },
              {
                key: "7",
                icon: (
                  <Link to={PAGE_PATHS.Notifications}>
                    <NotificationsIcon />
                  </Link>
                ),
                label: <Link to={PAGE_PATHS.Notifications}>Notifications</Link>,
              },
              {
                key: "8",
                icon: (
                  <Link to={PAGE_PATHS.Settings}>
                    <SettingsIcon />
                  </Link>
                ),
                label: <Link to={PAGE_PATHS.Settings}>Settings</Link>,
              },
            ]}
          />
        </div>
        <div className="bottomSider">
          <div>
            <SendMessage />
          </div>
          <div className="themeChange">
            <div className="bulb">
              <Bulb />
            </div>
            <Switch
              style={{ width: 40 }}
              defaultChecked
              checkedChildren={<BulbOutlined />}
              unCheckedChildren={<BulbOutlined />}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </Sider>
  );
};
export default SideBar;
