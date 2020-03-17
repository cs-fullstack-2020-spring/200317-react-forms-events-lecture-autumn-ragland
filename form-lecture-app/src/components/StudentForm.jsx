import React, { Component } from 'react';

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: " ",
            studentGrade: 0,
            studentArray: [],
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();
        this.state.studentArray.push(
            {
                name: this.state.studentName,
                grade: this.state.studentGrade
            });
        console.log(this.state.studentArray);
    }

    handleNameChange = (event) => {
        this.setState({ studentName: event.target.value });
    }

    handleGradeChange = (event) => {
        this.setState({ studentGrade: event.target.value });
    }

    render() {
        return (
            <div>
                <h1>Student Form Component</h1>
                <form action="">
                    <fieldset>
                        <label htmlFor="studentName">Student Name : </label>
                        <input type="text" name="studentName" id="studentName" value={this.state.studentName} onChange={this.handleNameChange} />

                        <label htmlFor="studentGrade">Student Grade : </label>
                        <input type="number" name="studentGrade" id="studentGrade" value={this.state.studentGrade} onChange={this.handleGradeChange} />

                        <button onClick={this.handleSubmission}>Submit</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default StudentForm;