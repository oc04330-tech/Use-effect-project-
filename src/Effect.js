import { useState, useEffect } from "react";
import './App.css';

export default function Effect() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(
                "https://fakestoreapi.com/products"
            );
            const data = await response.json();
            setProducts(data);
        }

        fetchProducts();
    }, []);

    return (
        <div>
            <div className="products-container">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img
                            src={product.image}
                            alt={product.title}
                            className="product-image"
                        />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}