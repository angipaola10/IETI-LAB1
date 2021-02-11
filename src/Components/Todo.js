import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <div className="card shadow-sm m-4">
                <h6> Text: {this.props.text}</h6> 
                <h6>Priority: {this.props.priority}</h6> 
                <h6>Due Date: {this.props.dueDate.toString()}</h6> 
            </div>
        );
    }

}