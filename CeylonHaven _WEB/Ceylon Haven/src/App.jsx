import React from "react";
import NavigationBar from "./component/navigationbar.jsx";
import { Routes, Route } from "react-router-dom";
import CeylonHaven from "./home/home.jsx";
import AboutPage from "./about/about.jsx";
import ContactPage from "./contact/contact.jsx";
import ServicesPage from "./services/services.jsx";
import NewsPage  from "./News/news.jsx";
import LoginPage   from "./login page/login.jsx"
import SignupPage  from "./signup/signup page.jsx";

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<CeylonHaven />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/News" element={<NewsPage />} />
        <Route path="/login page" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
};

export default App;
