import "./App.css";
import ContextButtonComponent from "./components/context-concept/button";
import ContextTextComponent from "./components/context-concept/text";
// import Users from "./components/users";
// import ClassBasedComponent from "./components/class-based-component";
// import FunctionalComponent from "./components/functional-component";
// import ProductList from "./components/products";
// const dummyProduct = ["Product 1", "Product 2", "Product 3"];

function App() {
  return (
    <>
      <h1>React JS Concepts 2024</h1>
      {/* {<ClassBasedComponent />} */}
      {/* <FunctionalComponent />  */}
      {/* {
        <ProductList
          listOfProducts={dummyProduct}
          name={"Ashwin"}
          city={"Chennai"}
        />
      } */}
      {/* <Users /> */}
      <ContextButtonComponent />
      <ContextTextComponent />
    </>
  );
}

export default App;
