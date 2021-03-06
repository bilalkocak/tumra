import React from 'react';
import confetti from '../../assets/image/confetti-03.png';

import './Result.scss';

const Result = () => {
    return (
        <div className={'result-container'}>
            <img src={confetti} alt=""/>
            <div className={'message-container'}>
                <span className={'emoji'}>🎉</span> <span className={'message'}>Talebini aldık!</span>
            </div>
        </div>
    );
};

export default Result;
