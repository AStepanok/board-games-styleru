import React from 'react';

import FirstSection__ContentWrapper from './first-section__content-wrapper';

import './first-section.css';


class FirstSection extends React.Component {
    render() {
        return (
            <div className='first-section'>
                <FirstSection__ContentWrapper/>
            </div>
        )
    }
}

export default FirstSection;
