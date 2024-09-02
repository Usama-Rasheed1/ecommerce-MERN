import { ReactElement, useCallback, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import TableHOC from "../../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const img =
  "data:image/jpeg;base64,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";
const img2 =
  "https://www.shutterstock.com/image-photo/baseball-cap-isolated-on-white-260nw-700804645.jpg";
const arr: DataType[] = [
  {
    photo: <img src={img} alt="s1"></img>,
    name: "Puma Shoes",
    price: 4564,
    stock: 25,
    action: <Link to={"/admin/products/sdad"}>Manage</Link>,
  },
  {
    photo: <img src={img2} alt="s1"></img>,
    name: "Blue Cap",
    price: 9484,
    stock: 5,
    action: <Link to={"/admin/products/sdad"}>Manage</Link>,
  },
  {
    photo: <img src={img} alt="s1"></img>,
    name: "Puma Shoes 2",
    price: 9484,
    stock: 89,
    action: <Link to={"/admin/products/sdad"}>Manage</Link>,
  },
  {
    photo: <img src={img2} alt="s1"></img>,
    name: "Blue Cap 2",
    price: 9484,
    stock: 5,
    action: <Link to={"/admin/products/sdad"}>Manage</Link>,
  },
  {
    photo: <img src={img} alt="s1"></img>,
    name: "Puma Shoes 3",
    price: 9484,
    stock: 5,
    action: <Link to={"/admin/products/sdad"}>Manage</Link>,
  },
  {
    photo: <img src={img2} alt="s1"></img>,
    name: "Blue Cap 3",
    price: 9484,
    stock: 5,
    action: <Link to={"/admin/products/sdad"}>Manage</Link>,
  },
  {
    photo: <img src={img} alt="s1"></img>,
    name: "Puma Shoes 4",
    price: 9484,
    stock: 5,
    action: <Link to={"/admin/products/sdad"}>Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);
  const table = useCallback(
    TableHOC<DataType>(columns, data, "dashboardProductBox", "Products", true),
    []
  );

  return (
    <div className="adminContainer">
      <Sidebar />
      <main>{table()}</main>
      <Link className="createProductBtn" to="/admin/products/new">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
