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
            <div className="row">
                <div className="col-5 text-center m-4">
                    <h1>New Item</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            id="new-text"
                            name="text"
                            onChange={this.handleChange}
                            value={this.state.text}
                            className="form-control m-4"
                        />
                        <input
                            id="new-priority"
                            name="priority"
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.priority}
                            className="form-control m-4"
                        />
                        <input
                            id="new-dueDate"
                            name="dueDate"
                            type="date"
                            onChange={this.handleChange}
                            value={this.state.dueDate}
                            className="form-control m-4"
                        />
                        <button type='submit' className="btn btn-primary">
                            Add #{this.state.items.length + 1}
                        </button>
                    </form>
                </div>
                <div className="col-6">
                    <TodoList todoList={this.state.items} />
                </div>
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