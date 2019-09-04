import React from 'react';

import FirstSection__GameHeading from './first-section__game-heading';
import FirstSection__GameDescription from "./first-section__game-description";
import FirstSection__IconWrapper from "./first-section__icon-wrapper";
import FirstSection__BuyButton from "./first-section__buy-button";

import './first-section__content-wrapper.css';


class FirstSection__ContentWrapper extends React.Component {
    render() {
        return (
            <div className='first-section__content-wrapper'>
                <FirstSection__GameHeading/>
                <FirstSection__GameDescription/>
                <FirstSection__IconWrapper/>
                <FirstSection__BuyButton/>
            </div>
        )
    }
}

export default FirstSection__ContentWrapper;
