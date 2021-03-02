import React from 'react';
import Header from "../Header/Header";
import PriceBar from "../PriceBar/PriceBar";
import DiscountBar from "../DiscountBar/DiscountBar";
import {useLocation} from 'react-router-dom';
import Routes from "./Routes";

const Layout = () => {
        const location = useLocation();
        return (
            <>
                {
                    location.pathname !== '/'
                    &&
                    <>
                        <Header/>
                        <PriceBar/>
                        <DiscountBar/>
                    </>
                }
                <Routes/>
            </>
        );
    }
;

export default Layout;
