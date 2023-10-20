import { Select, Tabs } from "antd";
import type { TabsProps } from "antd";
import HistoryTable from "../../molecules/HistoryTable/HistoryTable";

const ActivitiesTable = () => {

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "All",
      children: <HistoryTable/>,
    },
    {
      key: "2",
      label: "WithDrawals",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Deposit",
      children: "Content of Tab Pane 3",
    },
    {
      key: "4",
      label: "Bank WithDraws",
      children: "Content of Tab Pane 4",
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={items}
        tabBarExtraContent={
          <Select
            defaultValue="All_Time"
            style={{ width: 150 }}
            options={[
              { value: "All_Time", label: "Market Cap" },
              { value: "This_Past_Week", label: "This Past Week" },
              { value: "This_Past_Month", label: "This Past Month" },
              { value: "This_Past_Year", label: "This Past Year" },
            ]}
          />
        }
      />
    </div>
  );
};

export default ActivitiesTable;
