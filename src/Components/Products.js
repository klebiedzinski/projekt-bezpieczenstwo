import React from "react";

const Products = ({ products, setProducts }) => {

    const handleDelete = (id) => () => {
        const newProducts = products.filter((product) => product.id !== id);
        setProducts(newProducts);
        };
  return (
    <div className="products">
      <h2 className="products-heading">Products</h2>
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-info">Quantity: {product.quantity}</p>
          <p className="product-info">Price: {product.price}</p>
          <button className="btn btn-delete" onClick={handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
