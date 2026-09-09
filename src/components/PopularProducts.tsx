const PopularProducts = () => {
  return (
    <>
      <div className="bg-[#efebe3]">
        <div className="container mx-auto px-4 my-5">
          <h1 className="text-[36px] text-[#179800] font-bold">
            Popular Products
          </h1>

          <div className="grid grid-cols-12 gap-5 ">
            <div className="col-span-4 bg-amber-300 px-5 py-5 space-y-2">
            
              <h1 className="text-white font-bold text-[30px]">30% off</h1>
              <p>
                Discover a world of treats, toys, and essentials handpicked for
              </p>
              <button className="bg-white px-5 py-2 rounded">Buy Now</button>
            </div>

            <div className="col-span-8 bg-amber-600"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularProducts;
