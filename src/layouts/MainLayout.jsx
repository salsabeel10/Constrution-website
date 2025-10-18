import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NavbarDark from "../components/NavbarDark";


const MainLayout = () => {
    const location = useLocation(); // gives you the current URL path
    const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
        
      {isHomePage ? <Navbar /> : <NavbarDark />}

      <main className="flex-grow">
        <Outlet />  {/* This is where each page will render */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;




