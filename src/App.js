import React from "react";
import NavBar from "./components/navBar/NavBar.jsx";
import Banner from "./components/banner/Banner.jsx";
import Promo from "./components/promo/Promo.jsx";
import About from "./components/about/About.jsx";
import NosServices from "./components/nosServices/NosServices";
import WhyUs from "./components/whyUs/WhyUs.jsx";
import Packs from "./components/nosPacks/Packs.jsx";
import Contacts from "./components/contacts/Contacts.jsx";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <NavBar />
      <Banner />
      <Promo />
      <About />
      <NosServices />
      <WhyUs />
      <Packs />
      <Contacts />
    </div>
  );
}

export default App;
