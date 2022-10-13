import './style.css'

const CartProduct = ({ product, onRemoveClick }) => {
    return (
      <li className='produtos-carrinho'>
        <img src={product.img} alt={product.name} />
          <div className='lista-produtos'>
            <span className='produtos-nome'>
            {product.name}
            </span>
            <span className='categoria'>
            {product.category}
            </span>
          </div>
        <button onClick={() => onRemoveClick(product)}>Remover</button>
      </li>
    );
  };
  
  export default CartProduct;