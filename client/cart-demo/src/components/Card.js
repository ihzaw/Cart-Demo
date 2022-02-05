export const Card = () => {
  return (
    <div className="m-4 grid grid-rows-5 grid-cols-3 shadow-xl rounded-lg">
      <div className="bg-blue-200 row-span-3 col-span-3">image</div>
      <div className="p-2 col-span-2">product name</div>
      <div className="bg-yellow-200 row-span-2">add to cart</div>
      <div className="p-2 bg-slate-200 col-span-2">product price</div>
    </div>
  );
};
