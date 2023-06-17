import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import AdminPanel from './Pages/AdminPanel';
import ProductForm from './Components/ProductForm';
import Products from './Components/Products';
import Navbar from './Components/Navbar';
import "./App.css";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak"


function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      quantity: 10,
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      quantity: 20,
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      quantity: 30,
      price: 300,
    },
  ]);

  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <div className="App">
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/products" element={<Products products={products} setProducts={setProducts} />} />
          <Route
            path="/admin"
            // element={isAdmin ? <AdminPanel /> : <Home user={user} />}
            element={<AdminPanel products={products} setProducts={setProducts} />}
            />
        </Routes>
        </main>
      </div>
    </ReactKeycloakProvider>
  );
}

export default App;
