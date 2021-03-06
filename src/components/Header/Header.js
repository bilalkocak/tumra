import React from 'react';
import backButton from '../../assets/svg/icn-back.svg';
import cancelButton from '../../assets/svg/Combined Shape.svg';
import {setQuestionIndex} from "../../store/actions/question";
import './Header.scss';
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const Header = () => {
        const service = useSelector(state => state.service)
        const question = useSelector(state => state.question)
        const history = useHistory()
        const dispatch = useDispatch()

        const onClickBackButton = () => {
            question.questionIndex ?
                dispatch(setQuestionIndex(-1)) :
                history.push('/')
        }

        return (
            <header className='app-header'>
                <div className="header-container">
                    <div className="header-back-button" onClick={() => onClickBackButton()}>
                        <img src={backButton}/>
                    </div>
                    <div className="header-title-container">
                        {service.service.currentService.name}
                    </div>
                    <div className="header-cancel-button">
                        <img src={cancelButton}/>
                    </div>
                </div>
                <div className="percent-bar"
                     style={{width: `${100 * (question.questionIndex + 1) / question.questions.length}%`}}/>
            </header>
        );
    }
;

export default Header;
