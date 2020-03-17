import React, { Component } from 'react';
import Review from './Review';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonClicks: 0
        }
    }

    updateButtonClick = () => {
        this.setState({ buttonClicks: (this.state.buttonClicks + 1) })
    }

    render() {
        return (
            <div>
                <h1>03 17 20</h1>
                <div>
                    <h2>The button has been clicked {this.state.buttonClicks} times</h2>
                    <Review updateButtonClick={this.updateButtonClick} reviewTitle="Forms and Events" />
                </div>
            </div>
        )
    }
}

export default AppContainer;