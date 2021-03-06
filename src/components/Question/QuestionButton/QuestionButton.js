import React from 'react';
import './QuestionButton.scss';
import {setQuestionIndex, showError} from "../../../store/actions/question";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const QuestionButton = () => {
    const dispatch = useDispatch()
    const question = useSelector(state => state.question)
    const history = useHistory()

    const onClickButton = () => {
        const {questions, questionIndex, formData} = question;


        if (!questions[questionIndex].required || formData[questionIndex]) {
            dispatch(showError(''))

            if (isLast()) history.push('/result')
            else dispatch(setQuestionIndex(1))

        } else {
            dispatch(showError('Bu alan zorunlu'))
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
