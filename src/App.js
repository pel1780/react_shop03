import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Main from "./pages/Main";
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


    return (
        <Routes>
            <Route path="/" element={<Layout shopData={shopData} cart={cart} />}>
                <Route index element={<Main />} />
                <Route path="all" element={<ListAll shopData={shopData} />} />
                <Route path=":cate" element={<CateList shopData={shopData} />} />
                <Route path="search" element={<SearchResult shopData={shopData} />} />
                <Route path="detail/:itm" element={<Itm shopData={shopData} cart={cart} setCart={setCart} />} />
                <Route path="cart" element={<Cart shopData={shopData} cart={cart} setCart={setCart} />} />
            </Route>
        </Routes>
    )
}

export default App;