import { Select } from "antd";

const CustomSelect = () => {
  return (
    <Select
      defaultValue="Market_Cap"
      style={{ width: 120 }}
      options={[
        { value: "Market_Cap", label: "Market Cap" },
        { value: "A-Z", label: "A - Z" },
        { value: "Volumes", label: "Volumes" },
        { value: "Last_24H", label: "Last 24H" },
        { value: "Price", label: "Price" },
      ]}
    />
  );
};

export default CustomSelect;
