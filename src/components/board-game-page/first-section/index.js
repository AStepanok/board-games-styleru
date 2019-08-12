import React from 'react';
import './first-section.css';
import Description from '../Description'
import Icon from '../Game_icon'
import buy_button from '../Buttons'
import Heading from '../Game_heading'

class FirstSection extends React.Component {
    render() {
        return (
            <div className='first-section'>
                <div className='first-section__content-wrapper'>
                    <h1 className="first-section__game-heading">
                        <Heading/>
                    </h1>
                    <div className="first-section__game-description">
                        <Description/>
                        <Description/>
                    </div>
                    <div className='first-section_buttons'>
                        <div className="first-section__item-wrapper">
                            <Icon/>
                            <Icon/>
                            <Icon/>
                        </div>
                            <buy_button/>
                    </div>
                </div>
            </div>
        )
    }
}

export default FirstSection;
