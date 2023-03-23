import { Link, useLocation } from "react-router-dom";

const Nav = ({ shopData }) => {
    // const { pathname } = useLocation();
    // path를 보여주는

    const originalItm = shopData.map(it => it.category);
    const filterItm = originalItm.filter(Boolean); //Bolean : 참만 찾아서 뿌려주는
    const categoryItm = [...new Set(filterItm)];
    // console.log(filterItm);


    return (
        <nav className="gnb inner">
            <ul>
                {/* <li>path: {pathname}</li> */}
                <li><Link to='/all'>
                    <i className="xi-bars"></i>
                </Link></li>
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