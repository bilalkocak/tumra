import React from 'react';
import backButton from '../../assets/svg/icn-back.svg';
import cancelButton from '../../assets/svg/Combined Shape.svg';

import './Header.scss';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Header = () => {
    const service = useSelector(state => state.service)
    const question = useSelector(state => state.question)
    const history = useHistory()

    return (
        <header className='app-header'>
            <div className="header-container">
                <div className="header-back-button" onClick={() => history.push('/')}>
                    <img src={backButton}/>
                </div>
                <div className="header-title-container">
                    {service.service.currentService.name}
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
