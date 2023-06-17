const ManageProducts = ({products, setProducts}) => {
    return ( 
        <div className="manage-products">
            <h2 className="products-heading">Products</h2>
            {products.map((product) => (
                <div className="product" key={product.id}>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-info">Quantity: {product.quantity}</p>
                    <p className="product-info">Price: {product.price}</p>
                </div>
            ))}
        </div>

     );
}
 
export default ManageProducts;