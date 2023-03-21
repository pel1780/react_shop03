import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Layout from "./Layout";
import List from "./shop/List";
import ListAll from "./shop/ListAll";


const App = () => {
    const [shopData, setShopData] = useState([]);
    const getShopData = async () => {
        const r = await axios.get('https://desipossa.github.io/shop_cra/assets/data.json');
        setShopData(r.data);

    }
    useEffect(() => {
        getShopData();
    }, [])
    console.log(shopData);


    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<List />} />
                <Route path="/all" element={<ListAll shopData={shopData} />} />
            </Route>
        </Routes>
    )
}

export default App;