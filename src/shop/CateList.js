import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CateList = ({ shopData, sw }) => {
    const { cate } = useParams();
    const list = shopData.filter(it => it.category === cate);
    const [sort, setSort] = useState(list);

    const priceUp = () => {
        setSort(list.sort((a, b) => b.price - a.price));
    }
    const priceDown = () => {
        setSort(list.sort((a, b) => a.price - b.price));
    }
    const sin = () => {
        setSort(list.sort((a, b) => b.id - a.id));
    }
    const hot = () => {
        setSort(list.sort((a, b) => b.description.length - a.description.length));
    }
    useEffect(() => {
        setSort(list)
    }, [cate, shopData])

    return (
        <div className="inner CateList">
            <div className="CateTit">
                <h2>{cate}</h2>
                {console.log(sort)}
                <ul>
                    <li onClick={priceUp}>높은가격</li>
                    <li onClick={priceDown}>낮은가격</li>
                    <li onClick={sin}>신상품</li>
                    <li onClick={hot}>인기상품</li>
                </ul>
            </div>
            <ul className="list">

                {list &&
                    sort.map(it => {
                        return (
                            <li key={it.id} className="itm">
                                <Link to={`/detail/${it.id}`}>
                                    <figure className="imgCase">
                                        <img src={it.api_featured_image} alt="" />
                                    </figure>
                                    <div className="itmTit">{it.name}</div>
                                    <ul className="color">
                                        {
                                            it.product_colors.map((color, idx) => {
                                                return <li key={idx} style={{
                                                    background: color.hex_value,
                                                    display: "inline-block",
                                                    width: 10,
                                                    height: 10
                                                }}></li>
                                            }).slice(0, 20)
                                        }
                                    </ul>
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

export default CateList;