import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Layout from './Layout';
import NoPage from './Components/NoPage/NoPage';
import Policy from './Components/Policy/Policy';

// Import the components for the main routes
import WebDevelopment from './Components/Services/WebDevelopment';
import MobileAppDevelopment from './Components/Services/MobileAppDevelopment';
import ECommerceDevelopment from './Components/Services/ECommerceDevelopment';
import SoftwareDevelopment from './Components/Services/SoftwareDevelopment';
import WireframingPrototyping from './Components/Services/WireframingPrototyping';

// Commented-out verticals
// import Healthcare from './Components/Verticals/Healthcare';
// import Consumer from './Components/Verticals/Consumer';
// import TravelTourism from './Components/Verticals/TravelTourism';
// import Education from './Components/Verticals/Education';
// import FoodRestaurant from './Components/Verticals/FoodRestaurant';
// import Warehouse from './Components/Verticals/Warehouse';
// import RealEstate from './Components/Verticals/RealEstate';
// import BankingFinance from './Components/Verticals/BankingFinance';
// import EnergyUtility from './Components/Verticals/EnergyUtility';
// import Ecommerce from './Components/Verticals/Ecommerce';
// import Manufacturing from './Components/Verticals/Manufacturing';

import OpenSource from './Components/Technologies/OpenSource';
import Enterprise from './Components/Technologies/Enterprise';
import RubyOnRails from './Components/Technologies/RubyOnRails';
import IoT from './Components/Technologies/IoT';
import Blockchain from './Components/Technologies/Blockchain';
import CloudComputing from './Components/Technologies/CloudComputing';

import Career from './Components/Career/Career';
// import ContactUs from './Components/ContactUs/ContactUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/privacy-policy" element={<Policy />} />

          {/* Services routes */}
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/ecommerce-development" element={<ECommerceDevelopment />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/wireframing-prototyping" element={<WireframingPrototyping />} />

          {/* Verticals routes */}
          {/* <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/consumer" element={<Consumer />} />
          <Route path="/travel-&-tourism" element={<TravelTourism />} />
          <Route path="/education" element={<Education />} />
          <Route path="/food-&-restaurnt" element={<FoodRestaurant />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/real-estate" element={<RealEstate />} />
          <Route path="/banking-&-finance" element={<BankingFinance />} />
          <Route path="/energy-&-utility" element={<EnergyUtility />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/manufacturing" element={<Manufacturing />} /> */}

          {/* Technologies routes */}
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/ruby-on-rails" element={<RubyOnRails />} />
          <Route path="/iot" element={<IoT />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/cloud-computing" element={<CloudComputing />} />

          {/* Other routes */}
          <Route path="/career" element={<Career />} />
          {/* <Route path="/contact-us" element={<ContactUs />} /> */}

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
