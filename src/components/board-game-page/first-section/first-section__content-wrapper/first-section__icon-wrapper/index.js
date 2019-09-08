import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons'

import './first-section__icon-wrapper.css';

class FirstSection__IconWrapper extends React.Component {
    render() {
        return (
            <div className='first-section__icon-wrapper'>
                <div className='first-section__game-parameter'>
                    <FontAwesomeIcon className='first-section__icon' icon={faDice} />
                    <p className='first-section__argument'>от 2 до 6 игроков</p>
                </div>
                <div className='first-section__game-parameter'>
                    <FontAwesomeIcon className='first-section__icon' icon={faUser} />
                    <p className='first-section__argument'>от 8 лет</p>
                </div>
                <div className='first-section__game-parameter'>
                    <FontAwesomeIcon className='first-section__icon' icon={faHourglassHalf} />
                    <p className='first-section__argument'>от 60 до 90 минут</p>
                </div>
            </div>
        )
    }
}

export default FirstSection__IconWrapper;
