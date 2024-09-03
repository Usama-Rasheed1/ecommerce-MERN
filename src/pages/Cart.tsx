import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "p1",
    photo:
      "data:image/jpeg;base64,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",
    name: "iPhone",
    price: "1300",
    quantity: 4,
    stock: 30,
  },
];
const subtotal = 400;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 50;
const total = subtotal + tax + shippingCharges - discount;

const Cart = () => {
  const [coupon, setCoupon] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    const id = setTimeout(() => {
      if (Math.random() > 0.5) {
        setValid(true);
      } else {
        setValid(false);
      }
    }, 1000);

    return () => {
      clearTimeout(id);
      setValid(false);
    };
  }, [coupon]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>
      <aside>
        <p>Subtotal: ${subtotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>Tax: ${tax}</p>
        <p>
          Discount: <em> - ${discount}</em>
        </p>
        <p>
          <b>Total: ${total}</b>
        </p>

        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />
        {coupon &&
          (valid ? (
            <span className="green">
              ${discount} off using the <code>{coupon}</code>
            </span>
          ) : (
            <span className="red">
              Invalid <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to={"/shipping"}>Checkout</Link>}
      </aside>
    </div>
  );
};

export default Cart;
