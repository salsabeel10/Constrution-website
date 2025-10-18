import { Routes, Route } from "react-router-dom";
import App from "../pages/Home/App";
import About from "../pages/About/About";
import OurServices from "../pages/OurService/OurServices";
import Contact from "../pages/Contact/Contact";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;