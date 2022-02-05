import Cart from "./assets/cart.svg";
import { Card } from "./components/Card";
function App() {
  return (
    <div className="App">
        <nav className="mb-8 w-full grid grid-cols-3 h-16 bg-red-200 justify-end px-6">
          <div className="col-start-3 flex justify-center p-2">
            <img className="object-fit" src={Cart} />
          </div>
        </nav>
        <div className="px-8 grid grid-cols-3 grid-rows-3 text-gray-900">
          <Card />
        </div>
    </div>
  );
}

export default App;
