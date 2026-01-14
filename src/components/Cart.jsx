import { useSelector } from "react-redux";
import { selectCartItems } from "../features/cart/cartSelectors";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector(selectCartItems);

  if (items.length === 0) {
    return <h3>Your cart is empty</h3>;
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
