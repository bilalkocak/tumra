import React, {useEffect} from 'react';
import {setCurrentService} from "../../store/actions/service";
import {useParams} from "react-router-dom";
import Question from "../Question/Question";
import MoonLoader from "react-spinners/ClipLoader";
import {useDispatch, useSelector} from "react-redux";
import {primaryGreen} from "../../constant";


const Service = () => {
    const {id} = useParams()
    const question = useSelector(state => state.question)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCurrentService(id))
    }, [])
    return (
        <section>
            {
                question.loading ? <MoonLoader color={primaryGreen} loading={true} css={{marginTop: 200}} size={150}/> :
                    <Question question={question?.questions[question?.questionIndex]}/>
            }
        </section>
    );
};

export default Service;
