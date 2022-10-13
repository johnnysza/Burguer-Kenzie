import Product from "../Product";
import './style.css'

const MenuContainer = ({ products, onProductClick }) => {
  return (
    <ul className="ul">
      {products.map((product) => {
        return <Product key={product.id} product={product} onProductClick={onProductClick}/>;
      })}
    </ul>
  );
};

export default MenuContainer;