import serviceIcon from "../assets/service.png";
import deliveryIcon from "../assets/delivery.png";
import productIcon from "../assets/products.png";

const ServicesSection = () => {
  return (
    <>
      <div className="container mx-auto px-4  my-8">
        <div>
          <h1 className="text-[36px] text-[#179800] font-bold">Services</h1>
        </div>

        <div className="grid grid-cols-3 gap-10 ">
          <div className="bg-[#efebe3] text-center py-5 px-5 rounded-xl space-y-2">
            <img src={serviceIcon} alt="" className="mx-auto bg-white py-2 px-2 rounded-full" />
            <h2 className="text-[24px] font-bold"> 24/7 Services </h2>
            <p className="text-[#4a4845]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>

          <div className="bg-[#efebe3] text-center py-5 px-5 rounded-xl space-y-2">
            <img src={deliveryIcon} alt="" className="mx-auto bg-white py-2 px-2 rounded-full"/>
            <h2 className="text-[24px] font-bold">Fast Delivery</h2>
            <p className="text-[#4a4845]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>

          <div className="bg-[#efebe3] text-center py-5 px- rounded-xl space-y-2">
            <img src={productIcon} alt="" className="mx-auto bg-white py-2 px-2 rounded-full" />
            <h2 className="text-[24px] font-bold">Healthy Products </h2>
            <p className="text-[#4a4845]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
