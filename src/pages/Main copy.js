import { useState } from "react";
import MainList from "./MainList";
import MainSlideList from "./MainSlideList";
import MainVisual from "./MainVisual";

const Main = ({ shopData, sw }) => {
    const [tab, setTab] = useState(0);
    const TabData = [
        { tit: 'lip_gloss', con: <MainSlideList cate={'lip_gloss'} shopData={shopData} sw={sw} /> },
        { tit: 'cream', con: <MainSlideList cate={'cream'} shopData={shopData} sw={sw} /> },
        { tit: 'palette', con: <MainSlideList cate={'palette'} shopData={shopData} sw={sw} /> },
    ]
    return (
        <main>
            <MainVisual />
            <MainSlideList cate={'liquid'} shopData={shopData} sw={sw} />
            <MainList cate={'pencil'} shopData={shopData} sw={sw} />
            <MainList cate={'lipstick'} shopData={shopData} sw={sw} />
            <div className="mainTab">
                <ul className="menu">
                    {
                        TabData.map((it, idx) => <li key={idx} onClick={() => setTab(idx)}>{it.tit}</li>)
                    }
                </ul>
                <div className="con">
                    {TabData[tab].con}
                </div>
            </div>
        </main>
    )
}

export default Main;