import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <ul>
                {
                    this.props.todoList.map( (todo) => (
                        <Todo {...todo} />
                    ))
                }
            </ul>
        );
    }

}