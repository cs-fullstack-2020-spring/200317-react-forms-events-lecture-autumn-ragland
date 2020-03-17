import React, { Component } from 'react';

class Review extends Component {

    render() {
        return (
            <div>
                <h3>{this.props.reviewTitle}</h3>
                <button onClick = {this.props.updateButtonClick}>Click ME</button>
            </div>
        )
    }
}

export default Review;