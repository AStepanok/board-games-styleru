import Button from "@material-ui/core/Button";
import React, {Component} from "react";
import './buttons.css';

class buy_button extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="first-section__buy_button">
                    <Button variant="contained" color="secondary">
                        Buy me
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}

export default buy_button;