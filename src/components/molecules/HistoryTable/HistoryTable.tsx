import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./HistoryTable.scss";
import { Bitcoin } from "../../atoms/icons";
import { HistoryDataType } from "../../../types/dummyDataType";
import { historyData } from "../../../utils/dummyData";

const columns: ColumnsType<HistoryDataType> = [
  {
    title: "Type",
    dataIndex: "type",
    render: (text: string) => (
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <Bitcoin size={32} />
        </div>
        <div style={{ marginLeft: 25 }}>{text}</div>
      </div>
    ),
  },
  {
    title: "Date",
    dataIndex: "dateT",
    render: (dataT: string) => <div className="dataTableRowLight">{dataT}</div>,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    render: (amount: string) => (
      <div className="dataTableRowBold">{amount}</div>
    ),
  },
  {
    title: "Address / Transaction ID",
    dataIndex: "traxID",
    render: (traxID: string) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div className="dataTableRowBold">{traxID[0]}</div>
        <div className="dataTableRowLight">${traxID[1]}</div>
      </div>
    ),
  },
];

const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: HistoryDataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
const HistoryTable = () => {
  return (
    <div className="historyTableWrapper">
      <div className="historyTableHeader">History</div>
      <div>
        <Table
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={historyData}
          pagination={false}
        />
      </div>
      <Button className="LoadMoreBtn">Load more</Button>
    </div>
  );
};

export default HistoryTable;
