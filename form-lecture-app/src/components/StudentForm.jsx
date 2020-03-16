import React, { Component } from 'react';

class StudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "",
            studentGrade: "",
            studentArray: [],
        }
    }

    handleSubmission = (event) => {
        event.preventDefault();
        this.state.studentArray.push({ name: this.state.studentName, grade: this.state.studentGrade })
        this.setState({ studentName: "", studentGrade: "" });
        console.log(this.state.studentArray);
    }

    handleChange = (event) => {
        if (event.target.name == "studentName") {
            this.setState({ studentName: event.target.value });
        } else if (event.target.name == "studentGrade") {
            this.setState({ studentGrade: event.target.value });
        }
    }

    render() {
        return (
            <div>
                <h1>Student Form</h1>
                <form onSubmit={this.handleSubmission}>
                    <fieldset>
                        <legend>Student Form</legend>
                        <div className="FormGroup">
                            <label htmlFor="studentName">Student Name</label>
                            <input type="text" name="studentName" id="studentName" value={this.state.studentName} onChange={this.handleChange} />
                        </div>

                        <div className="FormGroup">
                            <label htmlFor="studentGrade">Student Grade</label>
                            <input type="text" name="studentGrade" id="studentGrade" value={this.state.studentGrade} onChange={this.handleChange} />
                        </div>

                        <div className="FormGroup">
                            <button>Submit</button>
                        </div>
                    </fieldset>
                </form>
                <div>
                    {
                        this.state.studentArray.map((s, index) => {
                            return (
                                <div key={index}>
                                    <p>{s.name}</p>
                                    <p>{s.grade}</p>
                                </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default StudentForm;