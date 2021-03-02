import React from 'react';
import Header from "../Header/Header";
import PriceBar from "../PriceBar/PriceBar";
import DiscountBar from "../DiscountBar/DiscountBar";
import Routes from "./Routes";

const Layout = () => {
    return (
        <div>
            <Header/>
            <PriceBar/>
            <DiscountBar/>
            <Routes/>
        </div>
    );
};

export default Layout;
