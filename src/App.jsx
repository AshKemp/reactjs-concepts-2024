import "./App.css";
// import FormComponent from "./components/form";
import LoginComponent from "./components/login";
import RegisterComponent from "./components/register";
// import ContextButtonComponent from "./components/context-concept/button";
// import ContextTextComponent from "./components/context-concept/text";
// import UseReducerExample from "./components/use-reducer-example";
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
      {/* <ContextButtonComponent />
      <ContextTextComponent /> */}
      {/* <UseReducerExample /> */}
      {/* <FormComponent /> */}
      <div style={{ display: "flex", gap: "10px" }}>
        <LoginComponent />
        <RegisterComponent />
      </div>
    </>
  );
}

export default App;
