const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.imageUrl} alt={product.title} />
    <h3>{product.title}</h3>
    <p>{product.description}</p>
    <p>${product.price}</p>
  </div>
);

export default ProductCard;
