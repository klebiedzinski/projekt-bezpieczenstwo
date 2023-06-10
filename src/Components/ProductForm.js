import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

function ProductForm({ products, setProducts }) {
  const navigate = useNavigate();

  // Initial form values
  const initialValues = {
    name: "",
    quantity: 0,
    price: 0,
  };

  // Form validation function
  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (values.quantity <= 0) {
      errors.quantity = "Quantity must be greater than 0";
    }

    if (values.price <= 0) {
      errors.price = "Price must be greater than 0";
    }

    return errors;
  };

  // Form submission handler
  const handleSubmit = (values) => {
    const newProduct = {
      id: products.length + 1,
      name: values.name,
      quantity: values.quantity,
      price: values.price,
    };

    setProducts([...products, newProduct]);
    navigate("/products");
  };

  return (
    <div className="product-form">
      <h2>Add Product</h2>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="quantity">Quantity:</label>
            <Field type="number" id="quantity" name="quantity" />
            <ErrorMessage name="quantity" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <Field type="number" id="price" name="price" step="0.01" />
            <ErrorMessage name="price" component="div" className="error" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ProductForm;
