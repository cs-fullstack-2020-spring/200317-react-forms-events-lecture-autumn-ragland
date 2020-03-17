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
                grade: this.state.studentGrade,
            });
        this.setState({studentArray : this.state.studentArray});
        console.log(this.state.studentArray);
        this.setState({
            studentName: " ",
            studentGrade: 0,
        });
    }

    handleNameChange = (event) => {
        this.setState({ studentName: event.target.value });
    }

    handleGradeChange = (event) => {
        this.setState({ studentGrade: event.target.value });
    }

    handleInputChange = (event) => {
        if(event.target.name == "studentName") {
            this.setState({studentName : event.target.value})
        } else if (event.target.name == "studentGrade"){
            this.setState({studentGrade : event.target.value})
        }
    }

    render() {
        return (
            <div>
                <h1>Student Form Component</h1>
                <form action="">
                    <fieldset>
                        <label htmlFor="studentName">Student Name : </label>
                        <input type="text" name="studentName" id="studentName" value={this.state.studentName} onChange={this.handleInputChange} />

                        <label htmlFor="studentGrade">Student Grade : </label>
                        <input type="number" name="studentGrade" id="studentGrade" value={this.state.studentGrade} onChange={this.handleInputChange} />

                        <button onClick={this.handleSubmission}>Submit</button>
                    </fieldset>
                </form>
                <div>
                    {
                        this.state.studentArray.map((student, index) => {
                            return (
                                <div key = {index}>
                                    <p>Student Name : {student.name}</p>
                                    <p>Student Grade : {student.grade}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default StudentForm;