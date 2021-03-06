import React from 'react';
import Header from "../Header/Header";
import PriceBar from "../PriceBar/PriceBar";
import DiscountBar from "../DiscountBar/DiscountBar";
import {useLocation} from 'react-router-dom';
import Routes from "./Routes";
import {useSelector} from "react-redux";

const Layout = () => {
        const location = useLocation();
        const {currentService, loading} = useSelector(state => state.service.service)

        return (
            <>
                {
                    location.pathname !== '/'
                    &&
                    <>
                        <Header/>
                        {!loading && <PriceBar/>}
                        {
                            !loading && currentService.discountRateText &&
                            <DiscountBar text={currentService.discountRateText}/>
                        }
                    </>
                }
                <Routes/>
            </>
        );
    }
;

export default Layout;
