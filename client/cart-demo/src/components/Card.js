import { ReactComponent as Plus } from '../assets/plus.svg';
import { ReactComponent as Minus } from '../assets/minus.svg';

export const Card = ({ product, addToCart, page }) => {
  return (
    <div className="h-96 grid grid-rows-4 m-8 shadow-xl rounded-xl bg-white">
      <div className="row-span-3 flex justify-center items-center overflow-hidden bg-[#e8e7e5] rounded-xl">
        <img
          className="object-contain h-full"
          src={product.product_imgUrl}
          alt="img"
        />
      </div>
      <div className="flex rounded-b-xl">
        <div className="w-2/3 h-full text-sm">
          <div className="p-4 h-1/2 text-base font-bold">{product.product_name}</div>
          <div className="p-4 h-1/2">{`Rp. ${product.product_price}`}</div>
        </div>
        {page !== 'Cart' && <div className="h-full w-1/3 flex justify-center items-center" onClick={() => addToCart(product.id)}>
          <div className="w-20 h-20 p-4 justify-center flex">
            <div className="bg-green-400 hover:bg-green-500 h-full w-full rounded-full cursor-pointer flex justify-center items-center text-4xl font-bold text-white">
              <Plus fill="white" className="h-5 w-5"/>
            </div>
          </div>
        </div>}
        {page === 'Cart' && <div className="h-full w-1/3 flex justify-center items-center" onClick={() => addToCart(product.id)}>
          <div className="w-20 h-20 p-4 justify-center flex">
            <div className="bg-red-400 hover:bg-red-500 h-full w-full rounded-full cursor-pointer flex justify-center items-center text-4xl font-bold text-white">
              <Minus fill="white" className="h-5 w-5"/>
            </div>
          </div>
        </div>}
      </div>
    </div>
    // <div className="flex h-full w-1/3">
    //   <div className="bg-blue-200 h-full w-full p-4 mx-4"></div>
    // </div>
  );
};
