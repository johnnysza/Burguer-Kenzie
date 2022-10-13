import './style.css'

const Product = ({ product, onProductClick }) => {
    return (
      <li className='lista'>
        <div className='lista-img'>
          <img src={product.img} alt={product.name} />
        </div>
        <h4>{product.name}</h4>
        <p>{product.category}</p>
        <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</span>
        <button onClick={() => onProductClick(product.id)}>Adicionar</button>
      </li>
    );
  };
  
  export default Product;