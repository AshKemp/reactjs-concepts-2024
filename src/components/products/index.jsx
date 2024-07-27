// import ProductItem from "./components/product-item";

const dummyProduct = ["Product 1", "Product 2", "Product 3"];
function ProductList() {
  return (
    <div>
      <h3>E-Commerce Project</h3>
      {/* <ProductItem /> */}
      <ul>
        {dummyProduct.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
