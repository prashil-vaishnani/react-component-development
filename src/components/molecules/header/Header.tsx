import "./Header.scss";
import { Avatar, Layout } from "antd";
import Search from "antd/es/input/Search";
import { Notification, Profile } from "../../atoms/icons";
import DropdownMenu from "../../atoms/Dropdown/Dropdown";
const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header className="header">
      <div className="header__left">
        <Search addonBefore="search" placeholder="" className="inputSearch" />
      </div>
      <div className="header__right">
        <Notification />
        <DropdownMenu />
        <Avatar size={48} icon={<Profile />} />
      </div>
    </Header>
  );
};

export default CustomHeader;
