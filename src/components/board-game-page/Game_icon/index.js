import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";
import './Game_icon.css'


class Icon extends Component {
    render() {
        return (
            <React.Fragment>
                <FontAwesomeIcon className="first-section__icon" icon = { faCoffee } />
            </React.Fragment>
        );
    }
}

export default Icon;