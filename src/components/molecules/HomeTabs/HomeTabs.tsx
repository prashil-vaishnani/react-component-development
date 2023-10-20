import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Coins from "../Coins/Coins";
import CustomSelect from "../../atoms/Select/CustomSelect";

const HomeTabs = () => {
 
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Core Assets",
      children: <Coins />,
    },
    {
      key: "2",
      label: "Top Gainers",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Top Losers",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "New",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabBarExtraContent={<CustomSelect />}
      />
    </>
  );
};

export default HomeTabs;
