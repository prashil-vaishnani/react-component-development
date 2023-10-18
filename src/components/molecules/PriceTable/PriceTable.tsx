import { Table, Button } from "antd";
import "./PriceTable.scss";
import type { ColumnsType } from "antd/es/table";
import { UpArrow, Bitcoin } from "../../atoms/icons";
import PriceChart from "../../atoms/icons/PriceChart";
import CustomSelect from "../../atoms/Select/CustomSelect";
import { PriceDataType } from "../../../types/dummyDataType";
import { priceData } from "../../../utils/dummyData";

const columns: ColumnsType<PriceDataType> = [
  {
    title: "Token",
    dataIndex: "token",
    render: (text: string) => (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div style={{ width: 32, height: 32 }}>
          <Bitcoin />
        </div>
        <div>{text}</div>
      </div>
    ),
  },
  {
    title: "Symbol",
    dataIndex: "symbol",
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (price: string) => <div className="dataTableRowBold">${price}</div>,
  },
  {
    title: "24H",
    dataIndex: "market",
    render: (market: string) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: "#4FBF67",
        }}
      >
        <div>
          <UpArrow />
        </div>
        <div>{market}</div>
      </div>
    ),
  },

  {
    title: "Market Cap",
    dataIndex: "marketCap",
    render: (marketCap: string) => (
      <div className="dataTableRowBold">${marketCap}</div>
    ),
  },
  {
    title: "Volums",
    dataIndex: "volume",
    render: (volume: string) => (
      <div className="dataTableRowBold">${volume}</div>
    ),
  },
  {
    title: "Chart",
    dataIndex: "charts",
    render: () => (
      <div className="">
        <PriceChart />
      </div>
    ),
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: PriceDataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
const PriceTable = () => {
  return (
    <div className="PriceTableWrapper">
      <div className="priceTableHeader">
        <div className="priceTableHeader_text">Today's Cryptocurrency Prices</div>
        <div className="priceTableHeader_select">
          <CustomSelect/>
        </div>
      </div>
      <div>
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={priceData}
          pagination={false}
        />
      </div>
      <Button className="LoadMoreBtn">Load more</Button>
    </div>
  );
};

export default PriceTable;
