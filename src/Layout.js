import { Link, Outlet } from "react-router-dom";
import Nav from "./pages/Nav";

import Search from "./pages/Search";
import Header from "./pages/Header";

const Layout = ({ shopData, cart }) => {
    return (
        <div className="Wrap">
            <Header shopData={shopData} cart={cart} />
            <Outlet />
        </div>
    )
}

export default Layout;