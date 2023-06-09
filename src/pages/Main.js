import { useState } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import MainList from "./MainList";
import MainSlideList from "./MainSlideList";
import MainVisual from "./MainVisual";

const Main = ({ shopData, sw, cate }) => {
    const TabData = ['lip_gloss', 'cream', 'palette', 'concealer']
    return (
        <main>
            <MainVisual />
            <MainSlideList cate={'liquid'} shopData={shopData} sw={sw} />
            <MainList cate={'pencil'} shopData={shopData} sw={sw} />
            <MainList cate={'lipstick'} shopData={shopData} sw={sw} />
            <div className="mainTab">
                <ul className="menu">
                    {
                        TabData.map((it, idx) => <li key={idx}>
                            <Link to={`/tab/${it}`}>
                                {it}
                            </Link>
                        </li>)
                    }
                </ul>
                <div className="con">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default Main;