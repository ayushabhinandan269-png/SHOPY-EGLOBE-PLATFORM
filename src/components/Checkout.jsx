import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../features/cart/cartSelectors";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const items = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };

  if (items.length === 0) {
    return <h3>No items to checkout</h3>;
  }

  return (
    <div>
      <h2>Checkout</h2>

      <form>
        <input type="text" placeholder="Name" required />
        <br />
        <input type="text" placeholder="Address" required />
        <br />
        <input type="email" placeholder="Email" required />
      </form>

      <h3>Order Summary</h3>
      {items.map((item) => (
        <p key={item.id}>
          {item.title} × {item.quantity}
        </p>
      ))}

      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;

