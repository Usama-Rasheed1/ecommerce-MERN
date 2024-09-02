import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const arr: DataType[] = [
  {
    user: "Charles",
    amount: 8100,
    discount: 600,
    quantity: 7,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transaction/djsk">Manage</Link>,
  },
  {
    user: "Louis",
    amount: 4300,
    discount: 200,
    quantity: 4,
    status: <span className="purple">Shipped</span>,
    action: <Link to="/admin/transaction/djsk">Manage</Link>,
  },
  {
    user: "Cloe",
    amount: 6800,
    discount: 450,
    quantity: 5,
    status: <span className="green">Delivered</span>,
    action: <Link to="/admin/transaction/djsk">Manage</Link>,
  },
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);

  const table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboardProductBox",
      "Transactions",
      true
    ),
    []
  );

  return (
    <div className="adminContainer">
      <Sidebar />
      <main>{table()}</main>
    </div>
  );
};

export default Transaction;
