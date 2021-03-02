import React from 'react';
import {useHistory} from 'react-router-dom';
import './ServiceList.scss'

const ServiceList = () => {
    const history = useHistory()

    return (
        <div className='service-list'>
            <ul>
                <li className='service-list-title'>Servisler</li>
                <li onClick={() => history.push('/service/1')}>Servis 1</li>
                <li>Servis 2</li>
            </ul>
        </div>
    );
};

export default ServiceList;
