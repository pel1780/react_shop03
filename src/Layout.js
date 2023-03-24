import { Link, Outlet } from "react-router-dom";
import Nav from "./pages/Nav";

import Search from "./pages/Search";
import Header from "./pages/Header";
import RightBanner from "./pages/RightBanner";
import ToTop from "./pages/ToTop";
import Footer from "./pages/Footer";

const Layout = ({ shopData, cart }) => {
    return (
        <div className="Wrap">
            <Header shopData={shopData} cart={cart} />
            <Outlet />
            <RightBanner />
            <ToTop />
            <Footer />
        </div>
    )
}

export default Layout;