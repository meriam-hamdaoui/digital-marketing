import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "assets/style/style.css";
import NavBar from "components/navBar/NavBar.jsx";
import Acceuil from "components/acceuil/Acceuil.jsx";
import Promo from "components/promo/Promo.jsx";
import About from "components/about/About.jsx";
import Pourquoi from "components/pourquoi/Pourquoi.jsx";
import PackSection from "components/nosPacks/PackSection.jsx";
import ServiceSection from "components/nosServices/ServiceSection.jsx";
import Loader from "components/loader/Loader";
import Contact from "components/contacts/Contact";
//
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const activeLink = location.pathname.slice(1);
  console.log(activeLink);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
    });
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="App">
      {loading ? (
        <Loader />
      ) : (
        <div className="app_content">
          <NavBar activeLink={activeLink} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Acceuil />
                  <Promo />
                </>
              }
            />

            <Route path="/qui-somme-nous" element={<About />} />
            <Route path="/nos-services" element={<ServiceSection />} />
            <Route path="/pourquoi-nous" element={<Pourquoi />} />
            <Route path="/nos-packs" element={<PackSection />} />
            <Route path="/contactez-nous" element={<Contact />} />
          </Routes>

          <footer className="bottom_footer text-center">
            TRENDY AGENCY@copyright-2024
          </footer>
        </div>
      )}
    </div>
  );
}

export default App;
