import "./App.css";
import HeroSection from "./components/HeroSection";
import Navber from "./components/Navber";
import PopularProducts from "./components/PopularProducts";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <Navber></Navber>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <PopularProducts></PopularProducts>
    </>
  );
}

export default App;
