import React from "react";
import axios from "axios";
const Products = ({ products, setProducts }) => {

    const handleDelete = (id) => () => {
        axios.delete(`http://localhost:3001/api/products/${id}`)
        .then((response) => {
            setProducts(response.data);
            console.log(response.status);
        })
        .catch((error) => {
            console.log(error);
        });
        };
  return (
    <div className="products">
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
