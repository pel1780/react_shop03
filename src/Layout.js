import { Link, Outlet } from "react-router-dom";
import Nav from "./pages/Nav";

import logo from './img/top_logo.png';
import Search from "./pages/Search";

const Layout = ({ shopData, cart }) => {
    return (
        <div className="Wrap inner">
            <header className="header">
                <h1>
                    <Link to={`/`}>
                        <img src={logo} alt="" />
                    </Link>
                </h1>
                <Nav shopData={shopData} />
                <Search />
                <i className="xi-cart">{cart.length}</i>
            </header>
            <Outlet />
        </div>
    )
}

export default Layout;