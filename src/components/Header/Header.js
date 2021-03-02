import React from 'react';
import backButton from '../../assets/svg/icn-back.svg';
import cancelButton from '../../assets/svg/Combined Shape.svg';

import './Header.scss';

const Header = () => {
    return (
        <header className='app-header'>
            <div className="header-container">
                <div className="header-back-button">
                    <img src={backButton}/>
                </div>
                <div className="header-title-container">
                    {'Ferforje'}
                </div>
                <div className="header-cancel-button">
                    <img src={cancelButton}/>
                </div>
            </div>
            <div className="percent-bar" style={{width: `${'25'}%`}}/>
        </header>
    );
};

export default Header;
