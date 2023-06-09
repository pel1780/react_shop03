import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/Main";
import MainSlideList from "./pages/MainSlideList";
import Cart from "./shop/Cart";
import CateList from "./shop/CateList";
import Itm from "./shop/Itm";
import List from "./shop/List";
import ListAll from "./shop/ListAll";
import SearchResult from "./shop/SearchResult";


const App = () => {
    const [shopData, setShopData] = useState([]);
    const [cart, setCart] = useState([]);
    const getShopData = async () => {
        const r = await axios.get('https://desipossa.github.io/shop_cra/assets/data.json');
        setShopData(r.data);
    }
    useEffect(() => {
        getShopData();
    }, [])

    const [sw, setW] = useState([]);
    const getKr = async () => {
        const w = await axios.get('https://api.manana.kr/exchange/rate.json')
        setW(w.data[1].rate);
    }

    useEffect(() => {
        getKr()
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Layout shopData={shopData} cart={cart} sw={sw} />}>
                <Route path="/" element={<Main shopData={shopData} sw={sw} />}>
                    <Route index element={<MainSlideList cate={'lip_gloss'} shopData={shopData} sw={sw} />}></Route>
                    <Route path="tab/lip_gloss" element={<MainSlideList cate={'lip_gloss'} shopData={shopData} sw={sw} />}></Route>
                    <Route path="tab/cream" element={<MainSlideList cate={'cream'} shopData={shopData} sw={sw} />}></Route>
                    <Route path="tab/palette" element={<MainSlideList cate={'palette'} shopData={shopData} sw={sw} />}></Route>
                    <Route path="tab/concealer" element={<MainSlideList cate={'concealer'} shopData={shopData} sw={sw} />}></Route>
                </Route>
                <Route path="all" element={<ListAll shopData={shopData} sw={sw} />} />
                <Route path=":cate" element={<CateList shopData={shopData} sw={sw} />} />
                <Route path="search" element={<SearchResult shopData={shopData} />} />
                <Route path="detail/:itm" element={<Itm shopData={shopData} cart={cart} setCart={setCart} />} />
                <Route path="cart" element={<Cart shopData={shopData} cart={cart} setCart={setCart} sw={sw} />} />
            </Route>
        </Routes>
    )
}

export default App;