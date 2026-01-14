import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{item.title}</h4>
      <p>Quantity: {item.quantity}</p>

      <button onClick={() => dispatch(increaseQuantity(item.id))}>
        +
      </button>

      <button onClick={() => dispatch(decreaseQuantity(item.id))}>
        -
      </button>

      <button onClick={() => dispatch(removeFromCart(item.id))}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;

