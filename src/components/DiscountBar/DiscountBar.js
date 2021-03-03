import React from 'react';
import PropTypes from 'prop-types'
import './DiscountBar.scss';

const DiscountBar = ({text}) => {
    const textGenerator = () => {
        let array = text.split(/(%\d+)/)
        return (<>
            {array[0]} <span className={'discount-percentage'}>&nbsp; {array[1]} &nbsp; </span>{array[2]}
        </>)
    }
    return (
        <section className='discount-bar'>
            {textGenerator()}
        </section>
    );
};

DiscountBar.propTypes = {
    text: PropTypes.string.isRequired
};

export default DiscountBar;
