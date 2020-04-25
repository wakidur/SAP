import React, { Component } from 'react'
import Axios from 'axios'
export default class ToDoList  extends Component {
    constructor() {
        this.state = {
            todoItems: [],
            todoItem: []
        }
    }

    // Using Axios with Async-Await
    async componentDidMount() {
        const {data} = await Axios.get('/api/todos');
        this.setState({todoItems: data})
    }

    // Using Axios with .then()

    componentDidMount() {
        Axios.get('/api/todos').then((result) => {
            this.setState({todoItems: result.data})
        }).catch((err) => {
            console.error(err);
        });
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.todoItems.map((todo, idx) => {
                        <li key={idx}>{todo}</li>
                    })}
                </ul>
            </div>
        )
    }
}
