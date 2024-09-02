import { ReactElement, useState, useCallback } from "react";
import Sidebar from "../../components/admin/Sidebar";
import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img =
  "https://www.shutterstock.com/shutterstock/photos/564112600/display_1500/stock-vector-businessman-icon-564112600.jpg";
const img2 =
  "data:image/png;base64,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";
const arr: DataType[] = [
  {
    avatar: <img src={img} alt="men1" style={{ borderRadius: "50%" }} />,
    name: "Rafe Tale",
    email: "rafe@gmail.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img src={img2} alt="women1" style={{ borderRadius: "50%" }} />,
    name: "Jersey Gal",
    email: "gal@gmail.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Customers = () => {
  const [data] = useState<DataType[]>(arr);

  const table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Customers", true),
    []
  );

  return (
    <div className="adminContainer">
      <Sidebar />
      <main>{table()}</main>
    </div>
  );
};

export default Customers;
