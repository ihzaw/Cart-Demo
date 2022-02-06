import { ReactComponent as Cart } from "./assets/cart.svg";
import { Card } from "./components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const baseUrl = "http://localhost:3000";
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  // const [adding, setAdding] = useState(false);
  const [page, setPage] = useState('Home')

  const fetchProducts = () => {
    axios
      .get(`${baseUrl}/products`)
      .then(({ data }) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToCart = (productId) => {
    axios.post(`${baseUrl}/carts/1`, { productId })
    .then(({ data }) => {
      const payload = [
        ...cartProducts
      ]
      payload.push(data.response)
      setCartProducts(payload)
    })
    .catch(err => console.log(err))
  }

  const fetchCart = () => {
    axios
      .get(`${baseUrl}/carts/1`)
      .then(({ data }) => {
        console.log(data);
        setCartProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    fetchProducts();
    fetchCart()
  }, []);

  return (
    <div className="App bg-slate-100 font-mono">
      <div className="fixed bottom-4 left-4 col-start-3 flex justify-center items-center p-7 h-28 w-28 bg-yellow-400 rounded-full hover:bg-yellow-500 cursor-pointer" onClick={() => setPage('Cart')}>
        {cartProducts.length !== 0 && <div
          className={`absolute top-2 right-0 bg-[#ff0000] text-white h-8 w-8 font-bold rounded-full flex justify-center items-center`}
        >
          {cartProducts.length}
        </div>}
        <Cart className="h-full w-full stroke-2" fill="white" />
      </div>
      {page === 'Home' && <div className="grid grid-cols-3 px-16 text-gray-900">
        {products.map((product) => {
          return <Card product={product} key={product.id} addToCart={addToCart} />;
        })}
        {/* <Card product={products[0]} /> */}
      </div>}
      {page === 'Cart' && <div className="grid grid-cols-3 px-16 text-gray-900">
        {cartProducts.map((product, index) => {
          return <Card product={product} key={index} addToCart={addToCart} page={page} />;
        })}
        {/* <Card product={products[0]} /> */}
      </div>}
    </div>
  );
}

export default App;
