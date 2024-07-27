/* eslint-disable react/prop-types */
function ButtonComponent() {
  return <button>Click</button>;
}

function ProductItem({ product, key }) {
  return (
    <div key={key}>
      <p>{product}</p>
      <ButtonComponent />
    </div>
  );
}

export default ProductItem;
