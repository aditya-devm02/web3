// pages/index.js
import ProductList from "../components/ProductList";  

const products = [
  { id: 1, name: "Product 1", price: 20 },
  { id: 2, name: "Product 2", price: 30 },
  { id: 3, name: "Product 3", price: 50 },
];

export default function Home() {
  return (
    <div>
      <h1>Welcome to Web3 E-commerce</h1>
      <ProductList products={products} />
    </div>
  );
}
