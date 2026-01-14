import useFetchProducts from "../hooks/useFetchProducts";

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();

 if (loading) return <h3>Loading products, please wait...</h3>;
if (error) return <h3 style={{ color: "red" }}>Error: {error}</h3>;

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
