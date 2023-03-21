import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="Nav">
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/all'>all list</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;