/* eslint-disable react/prop-types */
// import ProductItem from "./components/product-item";

import ProductItem from "./components/product-item";
import "./style.css";

function ProductList(props) {
  const { name, city, listOfProducts } = props;
  const flag = true;
  //   function renderTextBlock(flag) {
  //     return flag ? (
  //       <h4>
  //         Name is {name}, he/she belongs to the city {city}
  //       </h4>
  //     ) : (
  //       <h4> Hello World</h4>
  //     );
  //   }

  const renderTextBlock = flag ? (
    <h4>
      Name is {name}, he/she belongs to the city {city}
    </h4>
  ) : (
    <h4> Hello World</h4>
  );

  return (
    <div>
      <h3 className="title">E-Commerce Project</h3>
      {/* <ProductItem /> */}
      {renderTextBlock}
      <ul>
        {listOfProducts.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
