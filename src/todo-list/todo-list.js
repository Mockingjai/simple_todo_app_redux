import React, { Component } from 'react';
import TodoElement from '../todo-element/todo-element';
import { connect } from "react-redux";

class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoElement />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    title: state.CreateTask,
});

export default connect(mapStateToProps,null)(TodoList);