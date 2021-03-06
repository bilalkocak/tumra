import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import {getServices} from "../../store/actions/service";
import MoonLoader from "react-spinners/ClipLoader";
import {primaryGreen} from "../../constant";

import './ServiceList.scss'

const ServiceList = () => {
    const history = useHistory()
    const service = useSelector(state => state.service)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getServices())
    }, [])
    return (
        <div className='service-list'>
            {
                service?.loading ?
                    <MoonLoader color={primaryGreen} loading={true} css={{marginTop: 200}} size={150}/> :
                    <ul>
                        <li className='service-list-title'>Servisler</li>

                        {
                            !service?.loading && service?.services.map(service => {
                                return (
                                    <li key={service.serviceId}
                                        onClick={() => history.push(`/service/${service.serviceId}`)}>{service.name}</li>
                                )
                            })
                        }
                    </ul>
            }

        </div>
    );
};

export default ServiceList;
