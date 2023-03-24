import { useRef } from "react";
import { Link } from "react-router-dom";
import Slide from 'react-slick';
import "slick-carousel/slick/slick.css";

const MainSlideList = ({ shopData, sw, cate }) => {
    const list = shopData.filter(it => it.category === cate);

    console.log(list)
    const slideOption = {
        arrows: false,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
    }

    const slide = useRef(null);

    return (
        <div className="inner MainSlideList">
            <div className="CateTit">
                <h2>{cate}</h2>
            </div>
            <div className="slidelist">
                <Slide {...slideOption} ref={slide}>
                    {
                        list.map(it => {
                            return (
                                <div key={it.id} className="itm">
                                    <Link to={`/detail/${it.id}`}>
                                        <figure className="imgCase">
                                            <img src={it.api_featured_image} alt="" />
                                        </figure>
                                        <div className="itmTit">{it.name}</div>
                                        <p className="itmDesc">{it.description && it.description.substr(0, 100)}{it.description?.length > 100 && '...'}</p>
                                        <div className="itmPrice">{parseInt(it.price * sw)}원</div>
                                    </Link>
                                </div>
                            )
                        }).slice(0, 20)
                    }
                </Slide>
                <button onClick={() => slide.current.slickPrev()} className="arrow prev">prev</button>
                <button onClick={() => slide.current.slickNext()} className="arrow next">next</button>
            </div>
        </div >
    )
}

export default MainSlideList;