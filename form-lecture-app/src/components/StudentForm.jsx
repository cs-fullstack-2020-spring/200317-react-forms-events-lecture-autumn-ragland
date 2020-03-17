import React, { Component } from 'react';

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmission = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Student Form Component</h1>
                <form action="">
                    <fieldset>
                        <label htmlFor="studentName">Student Name : </label>
                        <input type="text" name="studentName" id="studentName" />

                        <label htmlFor="studentGrade">Student Grade : </label>
                        <input type="number" name="studentGrade" id="studentGrade" />

                        <button onClick = {this.handleSubmission}>Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default StudentForm;