import React from "react";
import "./assets/style/style.css";
import NavBar from "./components/navBar/NavBar.jsx";
import Acceuil from "./components/acceuil/Acceuil.jsx";
import Promo from "./components/promo/Promo.jsx";
import About from "./components/about/About.jsx";
import NosServices from "./components/nosServices/NosServices";
import WhyUs from "./components/whyUs/WhyUs.jsx";
// import Packs from "./components/nosPacks/Packs.jsx";
import Footer from "./components/footer/Footer.jsx";
import PackSection from "./components/nosPacks/PackSection.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Acceuil />
      <Promo />
      <About />
      <NosServices />
      <WhyUs />
      {/* <Packs /> */}
      <PackSection />
      <Footer />
    </div>
  );
}

export default App;
