import { Link } from "react-router-dom";

const ListAll = ({ shopData, sw }) => {
    return (
        <div className="inner CateList">
            <div className="CateTit">
                <h2>all</h2>
            </div>
            <ul className="list">
                {
                    shopData.map(it => {
                        return (
                            <li key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure className="imgCase">
                                        <img src={it.api_featured_image} alt="" />
                                    </figure>
                                    <div className="itmTit">{it.name}</div>
                                    <p className="itmDesc">{it.description && it.description.substr(0, 100)}{it.description?.length > 100 && '...'}</p>
                                    <div className="itmPrice">{parseInt(it.price * sw)}원</div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ListAll;