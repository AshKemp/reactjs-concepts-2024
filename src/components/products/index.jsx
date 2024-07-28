/* eslint-disable react/prop-types */
// import ProductItem from "./components/product-item";

import { useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

function ProductList(props) {
  const { name, city, listOfProducts } = props;
  const [flag, setFlag] = useState(false);
  //   function renderTextBlock(flag) {
  //     return flag ? (
  //       <h4>
  //         Name is {name}, he/she belongs to the city {city}
  //       </h4>
  //     ) : (
  //       <h4> Hello World</h4>
  //     );
  //   }

  const handleToggleText = () => {
    setFlag(!flag);
  };

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
      <button onClick={handleToggleText}>Toggle text</button>
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
