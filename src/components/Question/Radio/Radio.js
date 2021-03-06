import React, {useState, useEffect} from 'react';
import './Radio.scss';
import PropTypes from 'prop-types';
import {useDispatch} from "react-redux";
import {saveAnswer} from "../../../store/actions/question";


const Radio = ({values}) => {
    const dispatch = useDispatch()
    const [hasImage, setHasImage] = useState(false);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setHasImage(Boolean(values[0].valueImageUrl))
    }, [])

    const onChangeValue = (e) => {
        const {value} = e.target
        setSelected(value)
        dispatch(saveAnswer(value))
    }
    const isChecked = (id) => {
        return parseInt(selected) === parseInt(id)
    }
    return (
        <div className={'radio-container'}>
            {
                values?.map(option => {
                    return (
                        <label key={option.id} htmlFor={option.id} className={`radio ${hasImage && 'radio-image'}`}>
                            {hasImage && <img src={option.valueImageUrl}/>}
                            <div>
                                <input onChange={(e) => onChangeValue(e)} type="radio" id={option.id}
                                       checked={isChecked(option.id)}
                                       value={option.id}/>
                                <div className='custom-radio'>
                                    {
                                        isChecked(option.id) && <div className='custom-radio-checked'/>
                                    }
                                </div>
                                <span>{option.value}</span>
                            </div>
                        </label>
                    )
                })
            }
        </div>
    );
};

Radio.propTypes = {
    values: PropTypes.array.isRequired
};

export default Radio;
