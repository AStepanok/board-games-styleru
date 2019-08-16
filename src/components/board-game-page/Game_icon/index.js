import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import './Game_icon.css'


class Icon extends Component {

    render() {
        const IconHolder = [];
        for(var i=0;i<3;i++){
            IconHolder.push((<FontAwesomeIcon className="first-section__icon" icon = { faCoffee } />)
            );
        }
        return (
            <React.Fragment>
                {IconHolder}
            </React.Fragment>
        );
    }
}

export default Icon;