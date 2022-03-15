import React, { Component } from "react";

class Classes extends Component {
    render() {
        const { classId } = this.props.params;
        return (
            <div>
                <h1>Dental Spa</h1>
                <p>route params: {classId}</p>
            </div>
        );
    }
}

export default Classes;
