import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "assets/style/style.css";
import NavBar from "components/navBar/NavBar.jsx";
import Acceuil from "components/acceuil/Acceuil.jsx";
import Promo from "components/promo/Promo.jsx";
import About from "components/about/About.jsx";
import Pourquoi from "components/pourquoi/Pourquoi.jsx";
import Footer from "components/footer/Footer.jsx";
import PackSection from "components/nosPacks/PackSection.jsx";
import ServiceSection from "components/nosServices/ServiceSection.jsx";
import Loader from "./components/loader/Loader";
//
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const activeLink = location.pathname.slice(1);
  console.log(activeLink);

  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of animation in milliseconds
    });

    if (location.hash && loading) {
      navigate(
        {
          pathname: location.pathname,
          search: location.search,
          hash: "",
        },
        { replace: true }
      );
    }
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
          </Routes>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
