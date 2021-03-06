import React from 'react';
import './QuestionButton.scss';
import {setQuestionIndex} from "../../../store/actions/question";
import {useDispatch, useSelector} from "react-redux";

const QuestionButton = () => {
    const dispatch = useDispatch()
    const question = useSelector(state => state.question)
    const onClickButton = () => {
        const {questions, questionIndex, formData} = question;

        if (!questions[questionIndex].required || formData[questionIndex]) {
            !isLast() &&
            dispatch(setQuestionIndex(1))
        }
    }
    const isLast = () => {
        const {questions, questionIndex} = question;
        return questionIndex === questions.length - 1
    }
    return (
        <div className={'question-button-container'}>
            <button className={'question-button'} onClick={() => onClickButton()}>
                {isLast() ? 'TALEP GÖNDER' : 'DEVAM'}
            </button>
        </div>
    );
};

export default QuestionButton;
