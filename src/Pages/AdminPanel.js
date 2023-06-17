import Products from "../Components/Products";
import ProductForm from "../Components/ProductForm";
const AdminPanel = ({ products, setProducts }) => {
  // Calculate the total number of products
  const totalProducts = products.length;

  // Calculate the total price of all products
  const totalPrice = products.reduce(
    (accumulator, product) => accumulator + product.price,
    0
  );

  return (
    <main className="admin-panel">
        <Products products={products} setProducts={setProducts}/>
        <ProductForm products={products} setProducts={setProducts}/>
    </main>
  );
};

export default AdminPanel;
