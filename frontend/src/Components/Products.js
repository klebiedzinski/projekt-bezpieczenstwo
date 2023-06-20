import React from "react";
import axios from "axios";
import { useEffect } from "react";
import keycloak from "../Keycloak";

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
        const { initialized } = keycloak;
        useEffect(() => {
          if (initialized) {
            console.log('siema');
            keycloak
              .updateToken(5)
              .then((refreshed) => {
                if (refreshed) {
                  axios
                    .get('http://localhost:3001/api/products', {
                      headers: {
                        Authorization: `Bearer ${keycloak.token}`,
                      },
                    })
                    .then((response) => {
                      setProducts(response.data);
                      console.log(response.status);  
                    })
                    .catch((error) => {
                      // Handle the error
                      console.error('Error fetching data:', error);
                    });
                }
              })
              .catch((error) => {
                console.error('Error updating token:', error);
              });
          }
        }, [keycloak, initialized]);
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
