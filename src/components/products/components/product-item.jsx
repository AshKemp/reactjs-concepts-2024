/* eslint-disable react/prop-types */
import styles from "./product-item.module.css";
function ButtonComponent() {
  return <button className={styles.buttonStyle}>Click</button>;
}

function ProductItem({ product, key }) {
  return (
    <div key={key}>
      <p className={styles.productTitle}>{product}</p>
      <ButtonComponent />
    </div>
  );
}

export default ProductItem;
