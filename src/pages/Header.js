import { Link } from "react-router-dom";
import Nav from "./Nav";
import Search from "./Search";

import logo from '../img/top_logo.png';
import { useEffect, useState } from "react";

const Header = ({ shopData, cart }) => {
    const [on, setOn] = useState(false);
    const scrollEvent = () => {
        let sct = window.scrollY;
        // console.log(sct)
        sct > 0 ? setOn(true) : setOn(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => {
            window.addEventListener('scroll', scrollEvent);
        }
    }, [])
    return (
        <header className={`header ${on && 'on'}`}>
            <h1>
                <Link to={`/`}>
                    <img src={logo} alt="" />
                </Link>
            </h1>
            <Nav shopData={shopData} />
            <div className="service">
                <Search />
                <i className="xi-cart-o"><span>{cart.length}</span></i>
            </div>
        </header>
    )
}

export default Header;