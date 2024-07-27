/* eslint-disable react/prop-types */
// import ProductItem from "./components/product-item";

import ProductItem from "./components/product-item";

function ProductList(props) {
  const { name, city, listOfProducts } = props;
  return (
    <div>
      <h3>E-Commerce Project</h3>
      {/* <ProductItem /> */}
      <h4>
        Name is {name}, he/she belongs to the city {city}
      </h4>
      <ul>
        {listOfProducts.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
