import React, {useEffect} from 'react';
import {setCurrentService} from "../../store/actions/service";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Service = () => {
    const {id} = useParams()
    const service = useSelector(state => state.service)
    const question = useSelector(state => state.question)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(setCurrentService(id))
    }, [])
    return (
        <section>

        </section>
    );
};

export default Service;
