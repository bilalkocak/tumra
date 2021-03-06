import React, {useState, useEffect} from 'react';
import './TextArea.scss'
import {useDispatch} from "react-redux";
import {saveAnswer} from "../../../store/actions/question";

const TextArea = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState('');


    useEffect(() => {

    }, [])
    const onChangeValue = (e) => {
        const {value} = e.target
        setText(value)
        dispatch(saveAnswer(value))
    }
    return (
        <div className={'form-textarea'}>
            <textarea onChange={onChangeValue} value={text}
                      placeholder={'Aklına gelen başka önemli bir detay var mı?'}/>
        </div>
    );
};

export default TextArea;
