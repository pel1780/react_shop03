import { Link, useParams } from "react-router-dom";

const CateList = ({ shopData }) => {
    const { cate } = useParams();
    const list = shopData.filter(it => it.category === cate);
    console.log(list)
    return (
        <ul className="list">
            {
                list.map(it => {
                    return (
                        <li key={it.id} className="itm">
                            <Link to={`/detail/${it.id}`}>
                                <figure>
                                    <img src={it.api_featured_image} alt="" />
                                </figure>
                                <strong>{it.name}</strong>
                                <p>{it.description.substr(0, 100)}{it.description.length > 100 && '...'}</p>
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default CateList;