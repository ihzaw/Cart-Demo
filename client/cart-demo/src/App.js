import { ReactComponent as Cart } from "./assets/cart.svg";
import { ReactComponent as ArrowLeft } from "./assets/arrow-thick-left.svg";
import { Card } from "./components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const baseUrl = "http://localhost:3000";
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [page, setPage] = useState("Home");

  const fetchProducts = () => {
    axios
      .get(`${baseUrl}/products`)
      .then(({ data }) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToCart = (productId) => {
    axios
      .post(`${baseUrl}/carts/1`, { productId })
      .then(({ data }) => {
        const payload = [...cartProducts];
        payload.push(data.response);
        setCartProducts(payload);
      })
      .then(() => {
        fetchCart();
      })
      .catch((err) => console.log(err));
  };

  const deleteFromCart = (productId) => {
    return new Promise((resolve) => {
      axios({
        url: `${baseUrl}/carts/1`,
        method: "DELETE",
        data: {
          productId,
        },
      })
        .then(() => {
          resolve();
        })
        .catch((err) => console.log(err));
    });
  };

  const deleteSequence = (productId) => {
    deleteFromCart(productId).then(() => fetchCart());
  };

  const fetchCart = () => {
    axios
      .get(`${baseUrl}/carts/1`)
      .then(({ data }) => {
        setCartProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkout = () => {
    return new Promise((resolve) => {
      axios({
        url: `${baseUrl}/carts/1/checkout`,
        method: "DELETE"
      })
        .then(() => {
          fetchCart()
        })
        .then(() => {
          resolve()
        })
        .catch((err) => console.log(err));
    });
  }

  const checkoutSequence = () => {
    checkout().then(() => {
      setPage(
        "Home"
      )
    })
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div className="App bg-slate-100 font-mono">

      {/** HomePage */}
      {page === "Home" && (
        <div className="grid grid-cols-3 px-16 text-gray-900">
          {products.map((product) => {
            return (
              <Card product={product} key={product.id} addToCart={addToCart} />
            );
          })}
          <div
          className="fixed bottom-4 left-4 col-start-3 flex justify-center items-center p-7 h-28 w-28 bg-yellow-400 rounded-full hover:bg-yellow-500 cursor-pointer"
          onClick={() => setPage("Cart")}
        >
          {cartProducts.length !== 0 && page === "Home" && (
            <div
              className={`absolute top-2 right-0 bg-[#ff0000] text-white h-8 w-8 font-bold rounded-full flex justify-center items-center`}
            >
              {cartProducts.length}
            </div>
          )}
          <Cart className="h-full w-full stroke-2" fill="white" />
        </div>
        </div>
      )}

      {/** Cart Page */}
      {page === "Cart" && (
        <div className="grid grid-cols-3 px-16 text-gray-900">
          {cartProducts.map((product, index) => {
            return (
              <Card
                product={product}
                key={index}
                deleteSequence={deleteSequence}
                page={page}
              />
            );
          })}
          {page === "Cart" && (
            <div
              className="fixed rounded-full left-6 w-auto h-auto cursor-pointer hover:bg-slate-200 p-2"
              onClick={() => setPage("Home")}
            >
              <ArrowLeft className="w-10 h-10" fill="gray" />
            </div>
          )}
          {page === "Cart" && (
            <div
              className="fixed top-4 right-6 col-start-3 flex justify-center items-center h-10 w-32 bg-green-400 rounded-lg hover:bg-green-500 cursor-pointer"
              onClick={() => checkoutSequence()}
            >
              <p className="text-white font-bold">Checkout</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
