import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../product/productSlice"
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const dispatch = useDispatch();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  
    return (
  <div className="page-container">
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
      className="search-input"
    />

    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  </div>
);

};

export default ProductList;
