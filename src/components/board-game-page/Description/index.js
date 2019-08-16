import React, { Component } from 'react';

function Description_text(props) {
    return <p>{props.text}</p>;
}

function Description_div() {
    return (
        <div>
            <Description_text text="Описание игры монополия." />
            <Description_text text="монополия круто" />
        </div>
    );
}

class Description extends Component {
    render() {
        return (
            <React.Fragment>
                <Description_div />
            </React.Fragment>
        );
    }
}

export default Description;