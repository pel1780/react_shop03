import { Link } from "react-router-dom";

const Nav = ({ shopData }) => {

    const originalItm = shopData.map(it => it.category);
    const filterItm = originalItm.filter(Boolean); //Bolean : 참만 찾아서 뿌려주는
    const categoryItm = [...new Set(filterItm)];
    console.log(filterItm);


    return (
        <nav className="Nav">
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/all'>all list</Link></li>
                {
                    categoryItm.map((it, idx) => {
                        return (
                            <li key={idx}><Link to={`/${it}`}>{it}</Link></li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;