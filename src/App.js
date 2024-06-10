import React, { useState, useEffect } from "react";
import "assets/style/style.css";
import NavBar from "components/navBar/NavBar.jsx";
import Acceuil from "components/acceuil/Acceuil.jsx";
import Promo from "components/promo/Promo.jsx";
import About from "components/about/About.jsx";
import Pourquoi from "components/pourquoi/Pourquoi.jsx";
import Footer from "components/footer/Footer.jsx";
import PackSection from "components/nosPacks/PackSection.jsx";
import ServiceSection from "components/nosServices/ServiceSection.jsx";
import Loading from "./components/loading/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div className="app_content">
          <NavBar />
          <Acceuil />
          <Promo />
          <About />
          <ServiceSection />
          <Pourquoi />
          <PackSection />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
