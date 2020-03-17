import React, { Component } from 'react';
import Review from './Review';
import StudentForm from './StudentForm';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        // set initial state
        this.state = {
            buttonClicks: 0
        }
    }

    // method to update state - called in child component
    updateButtonClick = () => {
        this.setState({ buttonClicks: (this.state.buttonClicks + 1) })
    }

    // render child components
    // pass call back function and review title property to Review component
    render() {
        return (
            <div>
                <h1>03 17 20</h1>
                <div>
                    <h2>The button has been clicked {this.state.buttonClicks} times</h2>
                    <Review updateButtonClick={this.updateButtonClick} reviewTitle="Forms and Events" />
                </div>
                <StudentForm/>
            </div>
        )
    }
}

export default AppContainer;