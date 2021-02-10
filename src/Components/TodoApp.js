import React from 'react';
import {TodoList} from './TodoList';
export class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: 0, dueDate:new Date() };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done?
                    </label>
                    <input
                        id="new-text"
                        name="text"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <input
                        id="new-priority"
                        name="priority"
                        type="number"
                        onChange={this.handleChange}
                        value={this.state.priority}
                    />
                    <input
                        id="new-dueDate"
                        name="dueDate"
                        type="date"
                        onChange={this.handleChange}
                        value={this.state.dueDate}
                    />
                    <button type='submit'>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
                <TodoList todoList={this.state.items} />
            </div>
        );
    }

    handleChange({target}) {
        this.setState({ [target.name]: target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate
        };
        this.setState(prevState => ({
            items: [...prevState.items, newItem],
            text: '',
            priority: 0,
            dueDate: new Date()
        }));
    }
}

