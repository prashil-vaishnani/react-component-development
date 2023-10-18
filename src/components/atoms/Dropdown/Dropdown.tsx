import { Select } from "antd";
import React from "react";

const DropdownMenu: React.FC = () => (
  <Select
    defaultValue="Ind/INR"
    style={{ width: 120 }}
    options={[
      { value: "Ind/INR", label: "Ind/INR" },
      { value: "Eng/USD", label: "Eng/USD" },
      { value: "China/YEN", label: "China/YEN" },
    ]}
  />
);

export default DropdownMenu;
