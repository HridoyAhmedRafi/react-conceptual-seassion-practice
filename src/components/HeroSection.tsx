import HeroBanner from "../assets/Hero Section 1.png";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 text-center my-10">
        <h1 className="text-[56px] font-bold">
          Freshness{" "}
          <span className="text-[#179800]">
            You Can<br></br> Count
          </span>{" "}
          On, Prices You’ll Love!
        </h1>
        <p>
          Shop your daily essentials at unbeatable prices. From fresh produce to
          pantry<br></br> staples, we’ve got you covered every day!
        </p>

        <img src={HeroBanner} alt="" className="mx-auto h-150" />
      </div>
    </>
  );
};

export default HeroSection;
