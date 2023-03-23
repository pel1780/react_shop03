import { Link } from 'react-router-dom';
import Slide from 'react-slick';
import "slick-carousel/slick/slick.css";

import { MainData } from '../data/Info';

const MainVisual = () => {
    const slideOption = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
    }
    return (
        < section >
            <Slide {...slideOption} className='MainSlide'>
                {
                    MainData.map((it, idx) => {
                        return (
                            <div key={idx} className={`itm itm0${idx + 1}`}>
                                <div className="slogan inner">
                                    <span>{it.name}</span>
                                    <h2>{it.tit}</h2>
                                    <p>{it.desc}</p>
                                    <Link to={it.link}>more</Link>
                                </div>

                            </div>
                        )
                    })
                }
            </Slide>
        </ section>
    )
}

export default MainVisual;