import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import './first-section.css';

class FirstSection extends React.Component {
    render() {
        return (
            <div className='first-section'>

                <div className='first-section__content-wrapper'>
                    <h1 className='first-section__game-heading'>Монополия</h1>
                    <p className='first-section__game-description'>Покупайте и богатейте! Но это, конечно же, не так просто.</p>
                <div className="first-section__icon-wrapper">
                    <FontAwesomeIcon icon={ faCoffee } className='first-section__icon'/>
                    <FontAwesomeIcon icon={ faCoffee } className='first-section__icon'/>
                    <FontAwesomeIcon icon={ faCoffee } className='first-section__icon'/>
                </div>
                    <button className="first-section__buy-button">Купить</button>
                </div>
            </div>
        )
    }
}

export default FirstSection;
