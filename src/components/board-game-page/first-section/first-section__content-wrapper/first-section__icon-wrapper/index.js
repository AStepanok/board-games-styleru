import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

import './first-section__icon-wrapper.css';

class FirstSection__IconWrapper extends React.Component {
    render() {
        return (
            <div className='first-section__icon-wrapper'>
                <FontAwesomeIcon className='first-section__icon' icon={faDice} />
                <FontAwesomeIcon className='first-section__icon' icon={faUserFriends} />
                <FontAwesomeIcon className='first-section__icon' icon={faHourglassHalf} />
            </div>
        )
    }
}

export default FirstSection__IconWrapper;
