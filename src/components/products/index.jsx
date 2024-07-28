/* eslint-disable react/prop-types */
// import ProductItem from "./components/product-item";

import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";
import "./style.css";

function ProductList(props) {
  const { name, city, listOfProducts } = props;
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const [changeStyle, setChangeStyle] = useState(false);
  //   function renderTextBlock(flag) {
  //     return flag ? (
  //       <h4>
  //         Name is {name}, he/she belongs to the city {city}
  //       </h4>
  //     ) : (
  //       <h4> Hello World</h4>
  //     );
  //   }
  useEffect(() => {
    setFlag(!flag);
    console.log("run only once per page load");
    return () => {
      console.log("Component is unmounted");
    };
  }, []);

  useEffect(() => {
    if (count === 10) setChangeStyle(true);
  }, [count]);

  const handleToggleText = () => {
    setFlag(!flag);
  };

  const handleToggleCount = () => {
    setCount(count + 1);
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
      <div>
        <button
          style={{
            backgroundColor: changeStyle ? "black" : "white",
            color: changeStyle ? "white" : "black",
          }}
          onClick={handleToggleCount}
        >
          Toggle Count
        </button>
        <p>The count is {count}</p>
      </div>
      <ul>
        {listOfProducts.map((product, index) => (
          <ProductItem product={product} key={index} />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
