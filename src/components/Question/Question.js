import React from 'react';
import PropTypes from 'prop-types';
import QuestionButton from "./QuestionButton/QuestionButton";
import './Question.scss'
import TextArea from "./TextArea/TextArea";
import Radio from "./Radio/Radio";

const Question = ({question}) => {


    return (
        <div className={'question-container'}>
            <h1>{question?.label}</h1>
            <div className="question-content">
                {question?.typeId < '7' ? (
                        <Radio values={question.values}/>
                    ) :
                    <TextArea/>
                }
                <QuestionButton/>
            </div>
        </div>
    );
};


Question.propTypes = {
    question: PropTypes.object.isRequired
};

export default Question;
