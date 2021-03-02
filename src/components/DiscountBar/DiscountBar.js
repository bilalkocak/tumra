import React from 'react';
import './DiscountBar.scss';

const DiscountBar = () => {
    return (
        <section className='discount-bar'>
            Bu hizmet Şubat ayında <span className={'discount-percentage'}>&nbsp; %17 &nbsp; </span>indirimli!
        </section>
    );
};

export default DiscountBar;
