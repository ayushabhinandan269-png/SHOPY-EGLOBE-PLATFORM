import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../features/cart/cartSelectors";

const Header = () => {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="header">
      <h2 className="logo">ShoppyGlobe</h2>

      <nav className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;



