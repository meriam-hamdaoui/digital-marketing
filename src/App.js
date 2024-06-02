import React from "react";
import "./assets/style/style.css";
import NavBar from "./components/navBar/NavBar.jsx";
import Acceuil from "./components/acceuil/Acceuil.jsx";
import Promo from "./components/promo/Promo.jsx";
import About from "./components/about/About.jsx";
import WhyUs from "./components/whyUs/WhyUs.jsx";
import Footer from "./components/footer/Footer.jsx";
import PackSection from "./components/nosPacks/PackSection.jsx";
import ServiceSection from "./components/nosServices/ServiceSection.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Acceuil />
      <Promo />
      <About />
      <ServiceSection />
      <WhyUs />
      <hr style={{ color: "rgba(207, 117, 153, 1)" }} />

      <PackSection />
      <hr style={{ color: "rgba(207, 117, 153, 1)" }} />

      <Footer />
    </div>
  );
}

export default App;
