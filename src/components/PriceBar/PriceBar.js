import React from 'react';
import './PriceBar.scss'
import {useSelector} from "react-redux";

const PriceBar = () => {
    const service = useSelector(state => state.service.service);

    return (
        <section className='price-bar'>
            <div>
                <span className='price-bar-text'>Ortalama fiyat aralığı:</span>
            </div>
            <div>
                <span className='price-range'>
                    {`${service.currentService.price?.min} - ${service.currentService.price?.max}`}
                </span>
                <span className='price-bar-currency'>{service.currentService.price?.currency}</span>
            </div>
        </section>
    );
};

export default PriceBar;
