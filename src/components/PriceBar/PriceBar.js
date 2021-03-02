import React from 'react';
import './PriceBar.scss'

const PriceBar = () => {
    return (
        <section className='price-bar'>
            <div>
                <span className='price-bar-text'>Ortalama fiyat aralığı:</span>
            </div>
            <div>
                <span className='price-range'>100 - 1.000</span> <span className='price-bar-currency'>TL</span>
            </div>
        </section>
    );
};

export default PriceBar;
