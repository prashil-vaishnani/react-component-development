import { Button, Table } from "antd";
import "./WalletTable.scss";
import type { ColumnsType } from "antd/es/table";
import { UpArrow, Bitcoin } from "../../atoms/icons";
import { WalletDataType } from "../../../types/dummyDataType";
import { walletData } from "../../../utils/dummyData";

const columns: ColumnsType<WalletDataType> = [
  {
    title: "Asset",
    dataIndex: "asset",
    render: (text: string) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Bitcoin size={32} />
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
    title: "24H market",
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
    title: "ON Orders",
    dataIndex: "onOrders",
    render: (onOrders: string[]) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="dataTableRowBold">{onOrders[0]}</div>
        <div className="dataTableRowLight">${onOrders[1]}</div>
      </div>
    ),
  },
  {
    title: "Available Balance",
    dataIndex: "availableBalance",
    render: (availableBalance: string[]) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="dataTableRowBold">{availableBalance[0]}</div>
        <div className="dataTableRowLight">${availableBalance[1]}</div>
      </div>
    ),
  },
  {
    title: "Total Balance",
    dataIndex: "totalbBalance",
    render: (totalbBalance: string[]) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="dataTableRowBold">{totalbBalance[0]}</div>
        <div className="dataTableRowLight">${totalbBalance[1]}</div>
      </div>
    ),
  },
];

const WalletTable = () => {
  return (
    <div className="WalletTableWrapper">
      <div className="tableHeader">Asset Balances</div>
      <div>
        <Table
          rowSelection={{
            type: "checkbox",
          }}
          columns={columns}
          dataSource={walletData}
          pagination={false}
        />
      </div>
      <Button className="LoadMoreBtn">Load more</Button>
    </div>
  );
};

export default WalletTable;
