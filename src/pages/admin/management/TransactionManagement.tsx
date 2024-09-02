import { useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import { OrderItemType, OrderType } from "../../../styles/adminStyles/types";
import { Link } from "react-router-dom";

const img =
  "data:image/jpeg;base64,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";

const orderItems: OrderItemType[] = [
  {
    name: "Harley",
    photo: img,
    _id: "dfhajd",
    quantity: 2,
    price: 45000,
  },
];

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Usama",
    address: "31-Brexley Street",
    city: "LA",
    state: "California",
    country: "USA",
    pinCode: 7479,
    status: "Processing",
    subTotal: 45000,
    discount: 5000,
    shippingCharges: 0,
    tax: 4200,
    total: 45000 + 4200 + 0 - 5000,
    orderItems,
    _id: "hh8",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subTotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Delivered" : "Shipped",
    }));
  };

  return (
    <div className="adminContainer">
      <Sidebar />

      <main className="productManagement">
        <section style={{ padding: "2rem" }}>
          <h2>Order Items</h2>

          {order.orderItems.map((i) => (
            <ProductCard
              name={i.name}
              photo={i.photo}
              _id={i._id}
              quantity={i.quantity}
              price={i.price}
            />
          ))}
        </section>

        <article className="ShippingInfoCard">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country} - ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subTotal}</p>
          <p>Shipping Charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Status:{" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>

          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};
const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transactionProductCard">
    <img src={photo} alt={name}></img>
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}{" "}
    </span>
  </div>
);

export default TransactionManagement;
