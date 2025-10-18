import { Routes, Route } from "react-router-dom";
import App from "../pages/Home/App";
import About from "../pages/About/About";
import OurServices from "../pages/OurService/OurServices";
import Contact from "../pages/Contact/Contact";
import MainLayout from "../layouts/MainLayout";


function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourservices" element={<OurServices />} />
      <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;